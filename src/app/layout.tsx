import type { Metadata } from "next";
import "./globals.scss";
import Menu from "./components/Menu";

export const metadata: Metadata = {
 title: "Meu portfólio",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="pt-br">
   <body className="layout">
    <div className="navigation"><Menu /></div>
    <div className="project">{children}</div>
    <div className="ads"></div>
    <div className="footer"></div>
   </body>
  </html>
 );
}
