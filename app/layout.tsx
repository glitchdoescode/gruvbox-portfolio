import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak Kumar Soni | AI Engineer",
  description: "AI Engineer specializing in multi-agent systems and production GenAI applications. LangGraph, RAG, FastAPI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
