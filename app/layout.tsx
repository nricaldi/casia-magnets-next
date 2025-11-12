import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "./ui/header/header"
import Footer from "./ui/footer/footer"

import { CartProviderWrapper } from "./providers/cart-provider-wrapper.tsx";

import "./globals.css";

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Casia Magnets",
  description: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <CartProviderWrapper>
          <Header />
          {children}
        </CartProviderWrapper>
        <Footer />
      </body>
    </html>
  );
}
