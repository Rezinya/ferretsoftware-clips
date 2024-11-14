import { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';

import { theme } from "components/layout/theme";
import Header from "components/layout/header/header";
import Footer from "components/layout/footer/footer";
import "styles/globals.scss";

export const metadata: Metadata = {
  title: {
    template: "%s | FerretSoftware Clips",
    default: "FerretSoftware Clips",
  },
  description: "An advanced search tool for Twitch clips from FerretSoftware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Header />
          <div className="page-container max-content-width">
            <main className="main">
              {children}
            </main>
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
