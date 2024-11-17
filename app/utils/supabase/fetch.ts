import { supabase } from "utils/supabase/client";
import { Tables } from "data/supabase.types";

export async function getClips({ query, startDate, endDate, byViewCount, isAscending }: {
  query?: string[];
  startDate?: string;
  endDate?: string;
  byViewCount?: boolean;
  isAscending?: boolean;
}) {
  let sortType = "view_count";

  if (byViewCount === false) {
    sortType = "created_at";
  }
  if (isAscending === undefined) {
    isAscending = false;
  }

  // TODO: Check query

  // TODO: Add filter by date

  const { data, error } = await supabase
    .from("clips")
    .select("*")
    .order(sortType, { ascending: isAscending });
  
  if (!error) {
    return data as Tables<"clips">[];
  }
  else {
    return [];
  }
}