import type { Metadata } from "next";
import "./styles/globals.scss";
import "./layout.scss";
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
  <html lang="pt-br" suppressHydrationWarning={true}>
   <body className="layout" suppressHydrationWarning={true}>
    <Menu />
    <div className="page">{children}</div>
   </body>
  </html>
 );
}
