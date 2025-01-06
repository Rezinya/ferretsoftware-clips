import { Paper, Text } from "@mantine/core";
import classes from "components/Layout/Home/Home.module.scss";

export default function StatsSummary() {
  const pullDate = "January 06, 2025 12:45PM PST";
  const totalCount = "13,616";
  const hundredCount = "2,005";
  const fiftyCount = "3,687";

  return (
    <Paper p="md" withBorder>
      <p>
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "brown.4", to: "snails.5", deg: 90 }}
          fw={700}
        >
          Last data pull:
        </Text>{" "}
        {pullDate}
      </p>

      <p className={classes["no-margin"]}>FerretSoftware has a total of <strong>{totalCount}</strong> clips!</p>
      <ul>
        <li>Number of clips with 100+ views: <strong>{hundredCount}</strong></li>
        <li>Number of clips with 50+ views: <strong>{fiftyCount}</strong></li>
      </ul>
    </Paper>
  );
}