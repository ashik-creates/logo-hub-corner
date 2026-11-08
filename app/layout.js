import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Logo Hub Corner — Logo Design & Brand Identity Studio",
  description:
    "Logo Hub Corner is a logo design studio building thoughtful brand identities, visual systems and brand strategy.",
  keywords: [
    "logo design",
    "brand identity",
    "brand strategy",
    "visual design",
    "Logo Hub Corner",
  ],
  authors: [{ name: "Asik Hasan" }],
  openGraph: {
    title: "Logo Hub Corner — Logo Design & Brand Identity Studio",
    description:
      "Turning ideas into powerful brand identities. Explore selected logo and brand identity work by Logo Hub Corner.",
    siteName: "Logo Hub Corner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Hub Corner — Logo Design & Brand Identity Studio",
    description:
      "Turning ideas into powerful brand identities. Explore selected logo and brand identity work by Logo Hub Corner.",
  },
};

export const viewport = {
  themeColor: "#000C02",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh overflow-x-hidden bg-ink font-sans text-cream antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
