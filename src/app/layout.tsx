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
  <html lang="pt-br" suppressHydrationWarning={true}>
   <body className="layout" suppressHydrationWarning={true}>
    <div className="navigation">
     <Menu />
    </div>
    <div className="page">{children}</div>

    <div className="videoWrapper">
     <video
      controls
      disablePictureInPicture
      controlsList="nodownload"
      autoPlay={true}
      src="/videoTemp.mp4"
      title="vídeo sobre algo"
      className="video"
     ></video>
     <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
   </body>
  </html>
 );
}
