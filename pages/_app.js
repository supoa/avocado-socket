import "../styles/globals.css";
import { Provider } from "react-redux";
import ProgressBar from "react-scroll-progress-bar"; //Add this line
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { store } from "../redux/store";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const makeConnection = async () => {
    try {
      const { data } = await axios.post("/api/admin/connection");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    makeConnection();
  }, [router.asPath]);

  return (
    <>
      <NextNProgress height={3} color="blue" />

      <ProgressBar />

      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <Layout>
            <Component {...pageProps} />
          </Layout>{" "}
        </SnackbarProvider>
      </Provider>
    </>
  );
}

export default MyApp;
