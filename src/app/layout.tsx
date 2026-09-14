import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Nunito } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wellbite.app"),
  title: {
    default: "WellBite — Personalized Meal Plans & Nutritious Meals",
    template: "%s · WellBite",
  },
  description:
    "WellBite is a nutrition-focused meal subscription platform. Personalized meal plans and nutritious meals designed to make healthy eating simpler and more consistent.",
  openGraph: {
    title: "WellBite — Personalized Meal Plans & Nutritious Meals",
    description:
      "Personalized meal plans and nutritious meals designed to make healthy eating simpler and more consistent.",
    type: "website",
    siteName: "WellBite",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
