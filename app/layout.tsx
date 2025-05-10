import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "Poda",
  description: "Sebastian Wehlburg Portfolio",
  icons: {
    icon: "/imgs/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
