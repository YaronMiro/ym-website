import type { Metadata } from "next";
// import { JetBrains_Mono, Julius_Sans_One } from "next/font/google";
import { JetBrains_Mono, Pixelify_Sans } from "next/font/google";
import Header from '@/components/Header';
import Footer from "@/components/Footer";
import PageTransition from '@/components/PageTransition';
import "./globals.css";


const JetBrainsMonoFont = JetBrains_Mono({
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

const PixelifySansFont =
  Pixelify_Sans({
    variable: "--font-pixelifySansFont",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontsVars = [
  JetBrainsMonoFont,
  PixelifySansFont,
].map((font) => font.variable);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${fontsVars.join(' ')} antialiased`}
      >
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        < Footer />
      </body>
    </html>
  );
}
