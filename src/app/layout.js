import "./globals.css";


export const metadata = {
  title: "Crumb&Brew",
  description: "Brand Designing - Lovansh Gaur",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
