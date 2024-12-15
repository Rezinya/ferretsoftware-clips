import { Suspense } from "react";
import { Metadata } from "next";
import { Title } from "@mantine/core";

import SearchForm from "components/SearchForm/SearchForm";
import SearchResults from "components/SearchResults/SearchResults";
import LoadingCircle from "components/LoadingCircle";
import { getClipCount, getClips } from "lib/supabase/getClips";
import { SearchParams } from "lib/types";

export const metadata: Metadata = {
  title: "Search",
}

const INITIAL_FETCH_SIZE = 24;

export default async function SearchPage(props: { searchParams?: Promise<SearchParams> }) {
  const searchParams = await props.searchParams;
  const currSearchParamsString = `q:${searchParams?.q}, sort:${searchParams?.sort}, from ${searchParams?.sd} to ${searchParams?.ed}`;

  const initialClips = await getClips(searchParams, 0, INITIAL_FETCH_SIZE);
  const clipCount = await getClipCount(searchParams);

  return (
    <>
      <Title order={1} className="title">Search</Title>

      <SearchForm />

      <Suspense fallback={ <LoadingCircle /> }>
        <SearchResults searchParams={searchParams} initialClips={initialClips} clipCount={clipCount} key={currSearchParamsString} />
      </Suspense>
    </>
  );
}