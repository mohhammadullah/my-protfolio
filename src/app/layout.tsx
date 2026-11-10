import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gazi Mohammadullah | Full-Stack Web Developer",
  description:
    "Explore the portfolio of Gazi Mohammadullah, a Full-Stack Web Developer from Khulna, Bangladesh. Discover projects, skills, and modern web development work.",
  metadataBase: new URL("https://gazi-mohammadullah.vercel.app"),
  openGraph: {
    title: "Gazi Mohammadullah | Full-Stack Web Developer",
    description:
      "Explore the portfolio of Gazi Mohammadullah, a Full-Stack Web Developer from Khulna, Bangladesh. Discover projects, skills, and modern web development work.",
    url: "https://gazi-mohammadullah.vercel.app",
    siteName: "Gazi Mohammadullah Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gazi Mohammadullah | Full-Stack Web Developer",
    description:
      "Explore the portfolio of Gazi Mohammadullah, a Full-Stack Web Developer from Khulna, Bangladesh. Discover projects, skills, and modern web development work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
