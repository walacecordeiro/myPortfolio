import type { Metadata } from "next";
import "./globals.scss";
import Menu from "./components/Menu";
import VideoFixed from "./components/videoFixed";

export const metadata: Metadata = {
 title: "Meu portfólio",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="pt-br" suppressHydrationWarning={true}>
   <body className="layout" suppressHydrationWarning={true}>
    <div className="navigation">
     <Menu />
    </div>
    <div className="page">{children}</div>
   </body>
  </html>
 );
}
