import { Paper, Text } from "@mantine/core";
import classes from "components/Layout/Home/Home.module.scss";

export default function StatsSummary() {
  const pullDate = "December 16, 2024 07:44PM PST";
  const totalCount = "13,194";
  const hundredCount = "1,885";
  const fiftyCount = "3,479";

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