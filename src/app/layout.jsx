import "./globals.css";
import { AppProvider } from "../context/AppContext";

export const metadata = {
  title: "Crumb & Brew",
  description: "Modern café ordering experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}