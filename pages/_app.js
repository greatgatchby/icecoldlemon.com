import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/Layout";
import {AppProvider} from "../components/context/AppContext";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
      <AppProvider>
      <Layout>
          <script src="http://localhost:8097"></script>
        <Component {...pageProps} />
      </Layout>
      </AppProvider>
      )
}
export default MyApp
