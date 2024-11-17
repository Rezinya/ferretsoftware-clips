import { SegmentedControl } from "@mantine/core";

export default function ToggleSortType({ size, radius }: {
  size: string;
  radius: string;
}) {
  return (
    <SegmentedControl
      size={size}
      radius={radius}
      data={[
        "Date",
        "View Count"
      ]}
    />
  );
}