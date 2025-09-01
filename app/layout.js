import "./globals.css";

export const metadata = {
  title: "Saintdannyyy",
  description:
    "Discover the portfolio and projects of Saintdannyyy. Explore professional achievements, skills, and insights.",
  keywords: [
    "Saintdannyyy",
    "portfolio",
    "developer",
    "projects",
    "software engineer",
    "web development",
    "JavaScript",
    "Ghana",
    "Next.js",
  ],
  authors: [{ name: "Saintdannyyy" }],
  icons: {
    icon: [
      { url: "/favicon.jpg", sizes: "any" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title: "Saintdannyyy",
    description:
      "Explore the professional portfolio and projects of Saintdannyyy.",
    type: "website",
    locale: "en_US",
    url: "https://saintdannyyy.vercel.app",
    siteName: "Saintdannyyy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saintdannyyy",
    description:
      "Explore the professional portfolio and projects of Saintdannyyy.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-comic antialiased bg-black`}>{children}</body>
    </html>
  );
}
