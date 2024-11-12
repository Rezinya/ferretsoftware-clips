"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button, Title } from "@mantine/core";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
 
  return (
    <div className="error-wrapper">
      <Title order={2} className="error-title">Something went wrong!</Title>

      <p className="error-text">Error: {error.message}</p>
      
      <Button
        variant="gradient"
        gradient={{ from: "#ba8d73", to: "#9c7157", deg: 90 }}
        onClick={() => reset()}
        className="error-button"
      >
        Try again
      </Button>

      <Link href="/">Back to homepage</Link>
    </div>
  )
}