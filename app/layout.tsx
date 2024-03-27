import type { ReactNode } from "react";
import type { Metadata } from "next";

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Tag Browser",
};

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
