import { Inter, Cormorant_Garamond } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Crumb & Brew | Modern Menu",
  description: "Curated ingredients, engineered for taste. Pick-up in C-Scheme, Jaipur.",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}