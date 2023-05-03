import "styles/globals.scss";
import { useState } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider as ReduxProvider } from "react-redux";
import { config } from "lib/react-query-config";
import Devtools from "components/Devtools";
import Layout from "components/Layout";
import store from "redux /store";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient(config));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReduxProvider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReduxProvider>
        <Devtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
