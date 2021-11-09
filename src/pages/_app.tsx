import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "moment/locale/ko";

import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import { SnackbarProvider } from "notistack";
import moment from "moment";
import { wrapper } from "~/redux/store";
import { myInfo, getRunningOperationPromises } from "~/redux/services/api";
import { createEmotionCache } from "~/libs/create-emotion-cache";
import { theme } from "~/styles/theme";
import { Layout } from "~/components/Layout";

moment.locale("ko");

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
          <LocalizationProvider dateAdapter={DateAdapter} locale="ko">
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LocalizationProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </CacheProvider>
  </>
);

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      const { req, pathname } = ctx;
      if (req?.headers.cookie) {
        store.dispatch(myInfo.initiate({ cookie: req.headers.cookie }));
        await Promise.all(getRunningOperationPromises());
      }

      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
          pathname,
        },
      };
    }
);

export default wrapper.withRedux(MyApp);
