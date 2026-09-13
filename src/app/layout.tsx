import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "WellBite | Healthy Meal Plans & Nutrition-Focused Meals",
    template: "%s · WellBite",
  },
  description:
    "WellBite is a nutrition-focused meal subscription platform. Personalized meal plans and nutritious meals designed to make healthy eating simpler and more consistent.",
  openGraph: {
    title: "WellBite | Healthy Meal Plans & Nutrition-Focused Meals",
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
