import "../styles/globals.css";
import { useEffect, useState } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider as ReduxProvider } from "react-redux";
import { config } from "lib/react-query-config";

import store, { persistor } from "redux/store";
import { NavbarFooterLayout } from "components/layouts";
import ThemeProvider from "styles/ThemeProvider";
import { GetStarted } from "components/social-login";
import { AppSnackBar } from "components/basics";
import useDeviceType from "../custom-hooks/useDeviceType";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient(config));
  const { isMobile } = useDeviceType();
  const [userVisit, setUserVisit] = useState(false);

  useEffect(() => {
    setUserVisit(window.localStorage.getItem("userVisit"));
  }, []);
  function handleChangeUserVisit() {
    window.localStorage.setItem("userVisit", true);
    setUserVisit(true);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReduxProvider store={store}>
          <PersistGate persistor={persistor}>
            <ThemeProvider>
              <main>
                {isMobile ? (
                  userVisit ? (
                    <NavbarFooterLayout>
                      <Component {...pageProps} />
                    </NavbarFooterLayout>
                  ) : (
                    <GetStarted handleChangeUserVisit={handleChangeUserVisit} />
                  )
                ) : (
                  <NavbarFooterLayout>
                    <Component {...pageProps} />
                  </NavbarFooterLayout>
                )}
                <AppSnackBar />
              </main>
            </ThemeProvider>
          </PersistGate>
        </ReduxProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
