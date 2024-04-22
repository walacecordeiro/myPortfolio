import Link from "next/link";

export default function NotFound() {
 return (
  <div
   style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
    height: "100vh",
   }}
  >
   <h2>Página não encontrada</h2>
   <Link
    href="/"
    style={{
     color: "blue",
     fontSize: 20
    }}
   >
    Retornar para o início
   </Link>
  </div>
 );
}
