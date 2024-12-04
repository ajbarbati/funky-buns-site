import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import localFont from "next/font/local";
import "./globals.css";

const Simonetta = localFont({
  src:'./fonts/Simonetta-Regular.ttf'
})
export const metadata: Metadata = {
  title: "Funky Buns Sourdough Co",
  description: "At Funky Buns Sourdough, we bake bread with soul. Every loaf is handcrafted with love, patience, and the finest ingredients to give you that perfect bite. Whether you're craving classic sourdough or bold, funky creations, we’ve got buns you’ll love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Simonetta.className} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
