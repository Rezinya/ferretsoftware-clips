"use client";

import { useState } from "react";
import { Grid } from "@mantine/core";
import { getClips } from "utils/supabase/fetch";
import classes from "components/searchResults/searchResults.module.scss";

export default async function SearchResults() {
  const fetchSize = 25;
  const [results, setResults] = useState(fetchSize);

  let fromOffset = 0;
  let toOffset = fromOffset + fetchSize;

  const clips = await getClips(fromOffset, toOffset);

  const getMoreClips = async () => {
    fromOffset = 1 + fetchSize;
    toOffset += fetchSize;
    
    const newClips = await getClips(fromOffset, toOffset);
    setResults(toOffset);
  };

  return (
    <>
    </>
  );
}