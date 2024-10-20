import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
// import { MetadataRoute } from 'next'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is a personal portfolio application",
  icons: [
    {
      url: '/noback.png',
      sizes: 'any',
      type: 'image/png',
    },
  ],
};

 
// export const manifest: MetadataRoute.Manifest ={
//     name: 'Next.js App',
//     short_name: 'Next.js App',
//     description: 'Next.js App',
//     start_url: '/',
//     display: 'standalone',
//     background_color: '#fff',
//     theme_color: '#fff',
//     icons: [
//       {
//         src: '/favicon.ico',
//         sizes: 'any',
//         type: 'image/x-icon',
//       },
//     ],
//   }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}