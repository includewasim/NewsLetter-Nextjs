import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../shared/styles/globals.css";
import Provider from "@/shared/utils/Provider";
import localFont from 'next/font/local'
import { ClerkProvider } from "@clerk/nextjs";

const clashDisplay = localFont({
  src: '../assets/fonts/ClashDisplay-Variable.ttf',
  variable: '--font-clashDisplay', weight: "700",
})



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${clashDisplay.variable}`}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
