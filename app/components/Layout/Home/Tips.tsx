import { Code } from "@mantine/core";

export default function Tips() {
  return (
    <>
      <p>A few tips to get started:</p>

      <ul>
        <li>To find clips containing BOTH (or more) keywords, use the <Code>&</Code> symbol between each word</li>
        <li>To find clips containing ANY keywords, use the <Code>|</Code> symbol between each word</li>
        <li>To exclude a word, use the <Code>!</Code> symbol right before the word</li>
        <li><Code>&quot;quoted text&quot;</Code> is also supported to search for phrases</li>
      </ul>

      <p>Additional notes:</p>

      <ul>
        <li>Playgroup names can be used (e.g. <Code>GenPop</Code> or <Code>Oldies</Code>), especially if multiple ferrets are shown</li>
        <li>There is a <Code>nightcam</Code> tag for the night vision camera</li>
        <li>Not all of the clips are currently tagged; the more popular ones were prioritized</li>
      </ul>
    </>
  );
}