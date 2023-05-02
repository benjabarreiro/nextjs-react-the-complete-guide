import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { NotificationProvider } from "../store/NotificationContext";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
