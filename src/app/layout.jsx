import {  IBM_Plex_Sans   } from "next/font/google";
import "./globals.css";

const plexsans =  IBM_Plex_Sans ({ 
  subsets: ["latin"],
  weight: ['400', '700'], });

export const metadata = {
  title: "Portfolio Devrog",
  description: "Portfolio desarrollador de software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={plexsans.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
