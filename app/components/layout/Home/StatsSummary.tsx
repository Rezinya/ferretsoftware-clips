import { Paper, Text } from "@mantine/core";
import classes from "components/layout/homepage/home.module.scss";

export default function StatsSummary() {
  return (
    <Paper bg="var(--background-brown-light)" p="md" withBorder>
      <p>
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "brown.3", to: "custom.5", deg: 90 }}
          fw={700}
        >
          Last data pull:
        </Text>
        {" "}
        November 11, 2024 11:23AM PST
      </p>

      <p className={classes["no-margin"]}>FerretSoftware has a total of <strong>12,620</strong> clips!</p>
      <ul>
        <li>Number of clips with 100+ views: <strong>1,719</strong></li>
        <li>Number of clips with 100+ views: <strong>3,204</strong></li>
      </ul>
    </Paper>
  );
}