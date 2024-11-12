import { supabase } from "utils/supabase/client";
import { Tables } from "data/supabase.types";

export async function getClipsDefaultSort() {
  const { data, error } = await supabase
    .from("clips")
    .select("*")
    .order("view_count", { ascending: false });
  
  if (!error) {
    return data as Tables<"clips">[];
  }
  else {
    return [];
  }
}