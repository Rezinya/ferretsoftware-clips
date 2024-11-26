import { Metadata } from "next";
import { Text, Title } from "@mantine/core";
import Polaroid from "components/Polaroid/PolaroidCopy";
import classes from "pages/about/page.module.scss";

export const metadata: Metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <>
      <Title order={1} className="title">About</Title>

      <div className={classes.wrapper}>
        <div className={classes["left-section"]}>
          <p>Hi, I&apos;m
            {" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "#99a4b0", to: "#5d6f84", deg: 90 }}
              fw={700}
            >
              Rezi
            </Text>
            , also known as
            {" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "#99a4b0", to: "#5d6f84", deg: 90 }}
              fw={700}
            >
              Reziakti
            </Text>
            {" "}
            throughout various social media. I&apos;ve always been self-taught in regards to frontend / web dev and I wanted to have a more recent project under my belt to list on my resume, and so FerretSoftware Clips was born.
          </p>
          <p>
            The search function on Twitch is rather lackluster. Clips can only be filtered by creation date and sorted by view count. So I created this to not only expand on the search function (add search by title, by clip creator, etc.), but to also use it as a reference to learn how to distinguish the ferrets in the rescue. Maybe you also want to learn how to recognize them or see clips of your favorite noodle? Well, that&apos;s what this site is for!
          </p>
          <Text size="xs">
            Also, obligatory ferret tax.
          </Text>
        </div>
        <div className={classes["right-section"]}>
          <Polaroid name="Koda" sex="male" />
        </div>
      </div>
    </>
  );
}