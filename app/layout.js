import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://saintdannyyy.dev"),
  title:
    "Daniel Ntiri Addo | Software Engineer, Full Stack Developer & Tech Innovator",
  description:
    "Daniel Ntiri Addo is a Ghanaian software engineer, full stack developer, and digital innovator. Explore his professional portfolio, cutting-edge projects, and technical expertise in web, mobile, and AI development. Connect for collaboration, consulting, and technology solutions.",
  keywords: [
    "Daniel Ntiri Addo",
    "Addo Daniel",
    "Saintdannyyy",
    "Saint Danny",
    "Ghana software engineer",
    "Ghana web developer",
    "full stack developer",
    "AI developer",
    "mobile app developer",
    "Next.js portfolio",
    "React developer",
    "tech consultant",
    "digital innovation",
    "technology solutions",
    "project showcase",
    "collaboration",
    "hire developer Ghana",
    "software projects",
    "coding portfolio",
    "professional achievements",
    "modern web development",
    "cloud solutions",
    "open source",
    "tech entrepreneur",
    "backend developer",
    "frontend developer",
    "API development",
    "UI/UX designer",
    "Ghana tech talent",
  ],
  authors: [{ name: "Daniel Ntiri Addo" }],
  icons: {
    icon: [
      { url: "/favicon.jpg", sizes: "any" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    title: "Daniel Ntiri Addo | Software Engineer & Tech Creator",
    description:
      "Full-stack developer from Ghana shipping real-world products across healthcare, fintech, edtech, and logistics. Check out the projects, stack, and experience.",
    type: "website",
    locale: "en_US",
    url: "https://saintdannyyy.dev",
    siteName: "Daniel Ntiri Addo",
    images: [
      {
        url: "https://saintdannyyy.dev/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Daniel Ntiri Addo | Software Engineer & Tech Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@saintdannyyy",
    creator: "@saintdannyyy",
    title: "Daniel Ntiri Addo | Software Engineer & Tech Creator",
    description:
      "Software Engineer from Ghana shipping real-world products across healthcare, fintech, edtech, and logistics. Check out the projects, stack, and experience.",
    images: ["https://saintdannyyy.dev/opengraph-image"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-comic antialiased bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
