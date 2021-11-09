import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { api } from "src/redux/services/api";
import { Layout } from "../components/Layout";
import { createEmotionCache } from "../libs/create-emotion-cache";
import { theme } from "../styles/theme";
import { wrapper } from "../redux/store";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = createEmotionCache(),
}: MyAppProps) => (
  <>
    <Head>
      <title>알구</title>
      <meta name="keywords" content="아르바이트, 알바, 소일거리, 중장년" />
      <meta name="description" content="진짜 시니어를 위한 일자리" />
    </Head>
    <CacheProvider value={emotionCache}>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SnackbarProvider>
    </CacheProvider>
  </>
);

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      if (ctx.req?.headers.cookie) {
        store.dispatch(
          api.endpoints.getMyInfo.initiate(ctx.req.headers.cookie)
        );
        await Promise.all(api.util.getRunningOperationPromises());
      }

      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
          pathname: ctx.pathname,
        },
      };
    }
);

export default wrapper.withRedux(MyApp);
