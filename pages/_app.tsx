import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalContextProvider } from "context/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0"
        />
        <meta charSet="utf-8" />
        <title>Rick and Morty</title>
      </Head>

      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

export default MyApp;
