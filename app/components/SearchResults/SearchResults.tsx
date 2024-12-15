"use client";

import { useEffect, useRef, useState } from "react";
import { Text } from "@mantine/core";
import { useIntersection } from "@mantine/hooks";

import Clip from "components/Clip/Clip";
import { getClips } from "lib/supabase/getClips";
import { SearchParams } from "lib/types";
import { Tables } from "lib/types.database";
import classes from "components/SearchResults/SearchResults.module.scss";

const FETCH_SIZE = 24;

export default function SearchResults({ searchParams, initialClips, clipCount }: {
  searchParams?: SearchParams;
  initialClips: Tables<"clips">[];
  clipCount: number;
}) {
  const [clips, setClips] = useState<Tables<"clips">[]>(initialClips);
  const [offset, setOffset] = useState(FETCH_SIZE);

  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  const loadMoreClips = async () => {
    const newClips = await getClips(searchParams, offset, FETCH_SIZE);

    setClips((clips) => [...clips, ...newClips]);
    setOffset((offset) => offset + FETCH_SIZE);
  };

  useEffect(() => {
    if (entry?.isIntersecting && (offset < clipCount)) {
      loadMoreClips();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry, offset, clipCount]);

  return (
    <div className={classes.grid}>
      {clips?.map((clip) => (
        <Clip clip={clip} key={clip.id} />
      ))}

      <div ref={ref}>
        <Text c="var(--mantine-color-body)">
          {entry?.isIntersecting ? "Loading..." : "."}
        </Text>
      </div>
    </div>
  );
}