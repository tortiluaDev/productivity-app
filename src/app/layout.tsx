import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React from 'react';

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Productivity App",
  description: "Kanban + Pomodoro + Todo in one",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
