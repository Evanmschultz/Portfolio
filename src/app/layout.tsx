import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const NeueMontrealBook = localFont({
  src: "./fonts/NeueMontrealBook/PPNeueMontreal-Book.woff2",
  variable: "--font-neue-montreal-book",
});
const NeueMontrealItalicThin = localFont({
  src: "./fonts/NeueMontrealItalicThin/PPNeueMontreal-Thin.woff2",
  variable: "--font-neue-montreal-thin",
});

export const metadata: Metadata = {
  title: "Evan Schultz - Software Engineer",
  description: "Portfolio of Evan Schultz, Software Engineer",
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <body className={`${NeueMontrealBook.variable} ${NeueMontrealItalicThin.variable}`}>
        {children}
      </body>
    </html>
  );
}