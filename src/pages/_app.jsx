import Head from "next/head"
import "./globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mensura E-commerce | Distribuidoras de bebidas e mercados</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="Catálogo digital, pedidos B2B e loja online para distribuidoras de bebidas e mercados. WhatsApp, tabelas de preço e entrega em um só fluxo."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
