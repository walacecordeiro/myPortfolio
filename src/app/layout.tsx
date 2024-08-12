import type { Metadata } from "next";
import "./styles/globals.scss";
import "./layout.scss";

export const metadata: Metadata = {
 title: "Walace Cordeiro dos Santos",
 description: "Este é meu portfólio de desenvolvedor web",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="pt-br" suppressHydrationWarning={true}>
   <body id="root" className="layout" suppressHydrationWarning={true}>
    <div className="page">{children}</div>
   </body>
  </html>
 );
}
