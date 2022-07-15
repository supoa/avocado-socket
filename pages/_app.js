import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import ProgressBar from "react-scroll-progress-bar"; //Add this line
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress height={3} color="blue" />
      <Provider store={store}>
        <ProgressBar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
