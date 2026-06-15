import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "The Soho Farms | Premium Hilltop Agricultural Land",
  description:
    "100 acre premium gated community agricultural land in the Roha-Alibaug region with mountain views, infrastructure, and helicopter site visit experience.",
  icons: {
    icon: "/logo_shoho.png",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
