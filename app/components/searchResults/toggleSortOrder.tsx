import { SegmentedControl } from "@mantine/core";

export default function ToggleSortOrder({ size, radius }: {
  size: string;
  radius: string;
}) {
  return (
    <SegmentedControl
      size={size}
      radius={radius}
      data={[
        "Ascending",
        "Descending"
      ]}
    />
  );
}