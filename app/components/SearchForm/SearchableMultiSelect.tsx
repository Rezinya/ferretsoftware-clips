"use client";

import { useState } from "react";
import { MultiSelect } from "@mantine/core";

import { sortedFerretNames } from "data/ferrets";

export function SearchableMultiSelect() {
  const [value, setValue] = useState<string[]>([]);
  const ferretNames = sortedFerretNames;

  return (
    <MultiSelect
      label="Playgroups / ferrets"
      placeholder="Pick value"
      data={ferretNames}
    />
  );
}