import { Suspense } from "react";
import { Metadata } from "next";
import { Title } from "@mantine/core";

import SearchForm from "components/SearchForm/SearchForm";
import SearchResults from "components/SearchResults/SearchResults";
import { ClipSkeletons } from "components/Skeletons";
import { getClips } from "@/app/utils/supabase/fetch";

export const metadata: Metadata = {
  title: "Search",
}

const INITIAL_NUMBER_OF_CLIPS = 24;

export default async function SearchPage() {
  const initialClips = await getClips(0, INITIAL_NUMBER_OF_CLIPS);

  return (
    <>
      <Title order={1} className="title">Search</Title>

      <SearchForm />
      
      <Suspense fallback={ <ClipSkeletons /> }>
        <SearchResults initialClips={initialClips} />
      </Suspense>
    </>
  );
}