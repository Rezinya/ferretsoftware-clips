import { Title } from "@mantine/core";
import Tips from "components/Layout/Home/Tips";
import StatsSummary from "components/Layout/Home/StatsSummary";
import FAQ from "components/Layout/Home/FAQ";

export default function HomePage() {
  return (
    <>
      <Title order={1} className="title">Welcome!</Title>

      <p>Here you can begin searching through the clips from the FerretSoftware channel!</p>
      <Tips />

      <Title order={2} className="sub-title">Stats</Title>

      <StatsSummary />

      <Title order={2} className="sub-title">Frequently Asked Questions</Title>

      <FAQ />
    </>
  );
}
