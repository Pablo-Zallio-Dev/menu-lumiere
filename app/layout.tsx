import "./globals.css";
import { EB_Garamond, Inter, Cormorant_Garamond } from "next/font/google";

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

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html
                  lang="es"
                  className={` ${garamond.variable} ${inter.variable} ${cormorant.variable} bg-bg-background/50 scroll-smooth `}
            >
                  <body>{children}</body>
            </html>
      );
}

