"use server";

import { createClient } from "lib/supabase/client";
import { SearchParams } from "lib/types";
import { Tables } from "lib/types.database";

export async function getClips(searchParams: SearchParams | undefined, offset: number, limit: number) {
  if (!searchParams) { return []; }
  const supabase = await createClient();

  // Sort type and sort order
  const sortOptions = (searchParams.sort) ? searchParams.sort.split("_") : ["views", "desc"];
  const sortType = (sortOptions[0] === "views") ? "view_count" : "created_at";
  const isAscending = (sortOptions[1] === "asc") ? true : false;

  // Query
  let databaseQuery = (searchParams.q?.length > 0)
    ? supabase.rpc("clips_search", { query: searchParams.q })
    : supabase.from("clips").select("*");

  // Add sort and range
  databaseQuery = databaseQuery
    .order(sortType, { ascending: isAscending })
    .range(offset, offset + limit - 1);

  // Dates
  if (searchParams.sd && searchParams.ed) {
    databaseQuery = databaseQuery
      .gte("created_at", searchParams.sd)
      .lte("created_at", searchParams.ed);
  }

  const { data, error } = await databaseQuery;

  if (error) {
    console.error(error);
    return [];
  }
  
  return data as Tables<"clips">[];
}

// Just returns count to keep track of how many "pages" to load
export async function getClipCount(searchParams: SearchParams | undefined) {
  if (!searchParams) { return 0; }
  const supabase = await createClient();

  let databaseQuery = supabase
    .from("clips")
    .select("*", { count: "exact", head: true });

  // Dates
  if (searchParams.sd && searchParams.ed) {
    databaseQuery = databaseQuery
      .gte("created_at", searchParams.sd)
      .lte("created_at", searchParams.ed);
  }

  // Query
  if (searchParams.q?.length > 0) {
    databaseQuery = databaseQuery.textSearch("textsearchable_col", searchParams.q, {
      type: "websearch",
      config: "english"
    });
  }

  const { count, error } = await databaseQuery;

  if (error) {
    console.error(error);
    return 0;
  }

  return count as number;
}