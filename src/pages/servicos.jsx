import Menu from "@/components/menu";
import Head from "next/head";
export default function Servicos() {
  return (
    <>
      <Head>
        <title>Página de Serviços</title>
        <meta name="description" content="Página de serviços" />
      </Head>
      <h1>Olá next.js!</h1>
      <Menu />

      <h2>Serviços</h2>
      <ol>
        <li>Bla Bla Bla</li>
        <li>Bla Bla Bla</li>
        <li>Bla Bla Bla</li>
      </ol>
    </>
  );
}
