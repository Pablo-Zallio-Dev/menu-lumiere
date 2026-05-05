import { Metadata } from "next";
import "./globals.css";
import { EB_Garamond, Inter, Cormorant_Garamond } from "next/font/google";
import { MenuHeader } from "./components/ui/MenuHeader";

const garamond = EB_Garamond({
      subsets: ["latin"],
      variable: "--font-garamond",
});

const inter = Inter({
      subsets: ["latin"],
      variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
      subsets: ["latin"],
      variable: "--font-garamond",
});

export const metadata: Metadata = {
      title: "Menu Lumiere",
      description: "Carta del menu el restaurante lumiere",
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html
            id='home'
                  lang="es"
                  className={` ${garamond.variable} ${inter.variable} ${cormorant.variable} bg-bg-background/50 scroll-smooth `}
            >
                  <body>
                        <header  className=" flex flex-col justify-center items-center ">
                              <MenuHeader />
                        </header>

                        {children}</body>
            </html>
      );
}
