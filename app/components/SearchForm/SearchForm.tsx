"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Group, Select, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { RiCalendarLine, RiSearchLine } from "@remixicon/react";

import { searchFormSchema, SearchParams } from "lib/types";
import classes from "components/SearchForm/SearchForm.module.scss";

export default function SearchForm() {
  const defaultStartDate = new Date(2023, 2, 9);
  const todayDate = new Date();
  const router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      query: "",
      sort: "views_desc",
      dateRange: {
        startDate: defaultStartDate,
        endDate: todayDate,
      }
    },
    validate: zodResolver(searchFormSchema),
  });

  // Override submit as date is passed as ISO string by default
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  
    const query = form.getValues().query.trim().replace(" ", "+");
    const sort = form.getValues().sort;
    const startDate = form.getValues().dateRange?.startDate 
      ? form.getValues().dateRange?.startDate.toISOString().substring(0, 10)
      : undefined;
    const endDate = form.getValues().dateRange?.endDate 
      ? form.getValues().dateRange?.endDate.toISOString().substring(0, 10)
      : undefined;
  
    const queryPath = (startDate && endDate) 
      ? `/search?q=${encodeURIComponent(query)}&sort=${sort}&sd=${startDate}&ed=${endDate}`
      : `/search?q=${encodeURIComponent(query)}&sort=${sort}`;
  
    router.push(queryPath);
  }

  // If Search page was loaded with query, fill form values
  /* (Currently causing "too many re-renders" error)
  * if (searchParams && !form.isDirty()) {
  *   if (searchParams.dateRange?.startDate && searchParams.dateRange.endDate) {
  *     form.setValues({
  *       query: searchParams.query ?? "",
  *       sort: searchParams.sort ?? "views_desc",
  *       dateRange: {
  *         startDate: dayjsExtended(searchParams.dateRange.startDate).toDate(),
  *         endDate: dayjsExtended(searchParams.dateRange.endDate).toDate(),
  *       }
  *     });
  *   }
  *   else {
  *     form.setValues({
  *       query: searchParams.query ?? "",
  *       sort: searchParams.sort ?? "views_desc",
  *     });
  *   }
  * }
  **/

  return (
    <form onSubmit={handleSubmit} role="search">
      <div className={classes["form-inputs"]}>
        <TextInput
          {...form.getInputProps("query") }
          key={form.key("query")}
          label="Enter names or keywords"
          placeholder="Search"
          leftSectionPointerEvents="none"
          leftSection={ <RiSearchLine size={20} /> }
          className={classes["input-search"]}
        />

        <Select
          {...form.getInputProps("sort") }
          key={form.key("sort")}
          label="Sort by:"
          placeholder="Pick sort values"
          defaultValue="views_desc"
          data={[
            { value: "views_desc", label: "Views, desc" },
            { value: "views_asc", label: "Views, asc" },
            { value: "date_desc", label: "Date, desc" },
            { value: "date_asc", label: "Date, asc" },
          ]}
          allowDeselect={false}
          className={classes["input-sort"]}
          required
        />
      </div>

      <Group mt="md">
        <DatePickerInput
          {...form.getInputProps("dateRange.startDate") }
          key={form.key("dateRange.startDate")}
          label="Start date:"
          placeholder="Pick start date"
          minDate={defaultStartDate}
          maxDate={todayDate}
          defaultDate={defaultStartDate}
          valueFormat="YYYY-MM-DD"
          leftSectionPointerEvents="none"
          leftSection={ <RiCalendarLine size={20} /> }
          className={classes["input-date"]}
          clearable
        />

        <DatePickerInput
          {...form.getInputProps("dateRange.endDate") }
          key={form.key("dateRange.endDate")}
          label="End date:"
          placeholder="Pick end date"
          minDate={defaultStartDate}
          maxDate={todayDate}
          defaultDate={todayDate}
          valueFormat="YYYY-MM-DD"
          leftSectionPointerEvents="none"
          leftSection={ <RiCalendarLine size={20} /> }
          className={classes["input-date"]}
          clearable
        />
      </Group>

      <Group justify="flex-end" mt="md">
        <Button type="submit" variant="filled">
          Search
        </Button>
      </Group>
    </form>
  );
}