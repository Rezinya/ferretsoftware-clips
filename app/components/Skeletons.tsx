import { Skeleton } from "@mantine/core";

export function ClipSkeleton() {
  return (
    <>
      <Skeleton width={240} height={136} mb="xs" />
      <Skeleton height={12} radius="sm" />
    </>
  );
}

export function ClipsSkeleton() {
  return (
    <>
      <ClipSkeleton />
      
    </>
  );
}