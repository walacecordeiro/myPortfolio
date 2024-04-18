import type { Metadata } from "next";
import "./styles/globals.scss";
import "./layout.scss";
import Menu from "./components/Menu";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
 title: "Walace Cordeiro dos Santos",
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
    <Suspense fallback={<Loading />}>
     <div className="page">{children}</div>
    </Suspense>
   </body>
  </html>
 );
}
