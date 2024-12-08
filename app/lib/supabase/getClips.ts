"use server";

import { supabase } from "lib/supabase/supabase";
import { SearchParams } from "lib/types";
import { Tables } from "lib/types.database";

export async function getClips(searchParams: SearchParams | undefined, offset: number, limit: number) {
  if (!searchParams) {
    return [];
  }

  // Sort type and sort order
  const sortOptions = (searchParams.sort) ? searchParams.sort.split("_") : ["views", "desc"];
  const sortType = (sortOptions[0] === "views") ? "view_count" : "created_at";
  const isAscending = (sortOptions[1] === "asc") ? true : false;

  // Default database query
  let databaseQuery = supabase
    .from("clips")
    .select("*")
    .order(sortType, { ascending: isAscending })
    .range(offset, offset + limit - 1);

  // Dates
  if (searchParams.dateRange) {
    databaseQuery = databaseQuery
    .gte("created_at", searchParams.dateRange.startDate)
    .lte("created_at", searchParams.dateRange.endDate);
  }

  if (searchParams.query?.length > 0 && !searchParams.query.includes("+")) {
    // Search query is one word
    databaseQuery = databaseQuery.textSearch("textsearchable_col", `'${searchParams.query}'`);
  }
  else if (searchParams.query?.length > 0 && searchParams.query.includes("+")) {
    const queryWords = searchParams.query.split("+");
    let formattedQuery = "";
    let wordCount = queryWords.length;

    // Create search query with format 'word1' | 'word2'...
    for (const word of queryWords) {
      if (!--wordCount) {
        formattedQuery += `'${word}'`;
      }
      else {
        formattedQuery += `'${word}' | `;
      }
    }

    databaseQuery = databaseQuery.textSearch("textsearchable_col", formattedQuery);
  }

  const { data, error } = await databaseQuery;

  if (!error) {
    return data as Tables<"clips">[];
  }
  else {
    return [];
  }
}