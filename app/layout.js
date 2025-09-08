import "./globals.css";

export const metadata = {
  title: "Daniel Ntiri Addo | Software Engineer, Full Stack Developer & Tech Innovator",
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
    "Ghana tech talent"
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
    title: "Daniel Ntiri Addo | Software Engineer & Tech Innovator",
    description:
      "Discover the portfolio, technical skills, and innovative projects of Daniel Ntiri Addo, a leading Ghanaian software engineer and full stack developer. View web, mobile, and AI solutions, and connect for collaboration or consulting.",
    type: "website",
    locale: "en_US",
    url: "https://saintdannyyy.vercel.app",
    siteName: "Daniel Ntiri Addo Portfolio",
    images: [
      {
        url: "https://saintdannyyy.vercel.app/openGraph-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Ntiri Addo | Software Engineer & Tech Innovator",
    description:
      "Explore the portfolio, technical skills, and innovative projects of Daniel Ntiri Addo, Ghanaian software engineer and full stack developer. Connect for collaboration, consulting, and technology solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-comic antialiased bg-black`}>{children}</body>
    </html>
  );
}
