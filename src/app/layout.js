import "./globals.css";

export const metadata = {
  title: "Crumb & Brew",
  description: "Premium takeaway ordering experience",
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
