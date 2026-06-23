import "./globals.css";

export const metadata = {
  title: "Crumb & Brew",
  description: "Modern café ordering experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}