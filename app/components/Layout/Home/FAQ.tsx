"use client";

import Link from "next/link";
import { Accordion } from "@mantine/core";
import classes from "components/Layout/Home/Home.module.scss";

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

        <Accordion.Item value="mugshots">
          <Accordion.Control>
            Why are some of the ferret mugshots different from the wiki?
          </Accordion.Control>
          <Accordion.Panel>
            I wanted a more recent photo for most of the ferrets because ferret coats can change seasonally.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="tagging">
          <Accordion.Control>
            How can I help in tagging the clips?
          </Accordion.Control>
          <Accordion.Panel>
            Currently, I have a &apos;sample&apos; of the data at the PirateSoftware wiki under the page <Link href='https://piratesoftware.wiki/wiki/Ferrets/List_of_Clips'>Ferrets/List of Clips</Link>, so users can edit there. I&apos;m currently in the process of building the API so users can view and submit tags straight from this website.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="upcoming-features">
          <Accordion.Control>
          Any additional features planned?
          </Accordion.Control>
          <Accordion.Panel>
            <p className={classes["no-margin"]}>Definitely:</p>
            <ul>
              <li>Load clips on a separate page
                <ul>
                  <li>Page will display clip&apos;s tags</li>
                  <li>Include a form so users can submit tags</li>
                </ul>
              </li>
              <li>[Backend] Automate data pulling and updating database
                <ul>
                  <li>Update &apos;view_count&apos; on existing id&apos;s</li>
                  <li>Add new id&apos;s</li>
                </ul>
              </li>
            </ul>

            <p className={classes["no-margin"]}>Possibly:</p>
            <ul>
              <li>Allow users to log on to the website with their Twitch account</li>
              <li>Allow users to favorite clips</li>
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}