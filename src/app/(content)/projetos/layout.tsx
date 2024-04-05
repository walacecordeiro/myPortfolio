import type { Metadata } from "next";
import Menu from "../../components/Menu";

export const metadata: Metadata = {
 title: "Meu portfólio",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <>
  <h1>Parte fixa do lyout</h1>
   <div className="page">{children}</div>
  </>
 );
}
