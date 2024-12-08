import { Suspense } from "react";
import { Metadata } from "next";
import { Loader, Title } from "@mantine/core";

import SearchForm from "components/SearchForm/SearchForm";
import SearchResults from "components/SearchResults/SearchResults";
import { getClips } from "lib/supabase/getClips";
import { SearchParams } from "lib/types";

export const metadata: Metadata = {
  title: "Search",
}

const INITIAL_FETCH_SIZE = 24;

export default async function SearchPage({ searchParams }: {
  searchParams?: Promise<SearchParams>
}) {
  const params = await searchParams;
  const initialClips = await getClips(params, 0, INITIAL_FETCH_SIZE);
  let initialClipsIds = "";

  for (const clip of initialClips) {
    initialClipsIds += clip.id + "\n";
  }

  console.log("Initial clip IDs:\n" + initialClipsIds);
  console.log(params);

  return (
    <>
      <Title order={1} className="title">Search</Title>

      <SearchForm />

      <Suspense fallback={ <Loader color="snails.4" /> }>
        <SearchResults searchParams={params} initialClips={initialClips} key={initialClipsIds} />
      </Suspense>
    </>
  );
}