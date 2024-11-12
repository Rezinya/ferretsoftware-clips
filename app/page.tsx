import { Alert, Title } from "@mantine/core";
import { RiQuestionLine } from "@remixicon/react";

export default function Home() {
  return (
    <div>
      <Title order={2}>Welcome!</Title>
      <p>Here you can begin searching through the clips from the FerretSoftware channel!</p>
      <p>The filter feature is a <strong>work in progress</strong> though. The community is working together to sort out the clips!</p>

      <Alert variant="light" title="Did you know?" icon={ <RiQuestionLine /> }>
        As of November 2024, FerretSoftware has a total of <strong>12,620</strong> clips!
      </Alert>
    </div>
  );
}
