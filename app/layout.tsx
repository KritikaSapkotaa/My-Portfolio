import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kritika Sapkota",
  description: "Kritika Sapkota's data analysis portfolio featuring SQL, Python, Power BI, Tableau, and Excel projects.",
  openGraph: {
    title: "Kritika Sapkota",
    description: "Explore data cleaning, exploratory analysis, dashboards, and visualization projects by Kritika Sapkota.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body suppressHydrationWarning>{children}</body>

    </html>
  );
}
