"use client";

import Link from "next/link";
import { Accordion } from "@mantine/core";
import classes from "components/layout/homepage/home.module.scss";

export default function FAQ() {
  return (
    <div className={classes.faq}>
      <Accordion variant="separated" chevronPosition="left">
        <Accordion.Item value="data-pull">
          <Accordion.Control>
            How often will you do data pulls?
          </Accordion.Control>
          <Accordion.Panel>
            Probably weekly, for now. Once I have the process of pulling the data then uploading it to the database automated, it can be done daily.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="tagging">
          <Accordion.Control>
            How can I help in tagging the clips?
          </Accordion.Control>
          <Accordion.Panel>
            Currently, I have a &apos;sample&apos; of the data at the PirateSoftware wiki under the page <Link href='https://piratesoftware.wiki/wiki/Ferrets/List_of_Clips'>Ferrets/List of Clips</Link>, so users can edit there. I still need to build the API to allow users to view (and possibly update?) the database from here.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="upcoming-features">
          <Accordion.Control>
          Any additional features planned?
          </Accordion.Control>
          <Accordion.Panel>
            <ul>
              <li>Allow users to log on to the website with their Twitch account</li>
              <li>Allow users to favorite clips</li>
              <li>Load clips on a separate page with their tags + ability to submit tags</li>
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}