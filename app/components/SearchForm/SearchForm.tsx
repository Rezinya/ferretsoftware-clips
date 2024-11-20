"use client";

import Form from "next/form";
import { Button, TextInput } from "@mantine/core";
import { DatePickerInput } from '@mantine/dates';
import { RiCalendarLine, RiSearchLine } from "@remixicon/react";

import classes from "components/SearchForm/SearchForm.module.scss";

export default function SearchForm() {
  return (
    <Form action="">
      <div className={classes.inputs}>
        <TextInput
          leftSectionPointerEvents="none"
          leftSection={ <RiSearchLine size={20} /> }
          name="q"
          aria-label="Search input"
          placeholder="Search"
        />
      </div>
      
      <div className={classes.dates}>
        <DatePickerInput
          leftSectionPointerEvents="none"
          leftSection={ <RiCalendarLine size={20} /> }
          name="start_date"
          label="Start date:"
          placeholder="Pick start date"
          valueFormat="MMM DD, YYYY"
          className={classes["dates-item"]}
          clearable
        />

        <DatePickerInput
          leftSectionPointerEvents="none"
          leftSection={ <RiCalendarLine size={20} /> }
          name="end_date"
          label="End date:"
          placeholder="Pick end date"
          valueFormat="MMM DD, YYYY"
          className={classes["dates-item"]}
          clearable
        />
      </div>

      <Button type="submit">
        Search
      </Button>
    </Form>
  );
}