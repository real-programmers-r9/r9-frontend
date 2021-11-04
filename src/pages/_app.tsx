import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import axios from "axios";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { setCredentials } from "src/redux/slices/auth-slice";
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  </>
);

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      store.dispatch(
        setCredentials({
          user: await axios
            .get("http://localhost:4000/users/me", {
              withCredentials: true,
              headers: {
                cookie: ctx.req?.headers.cookie || "",
              },
            })
            .then((response) => response.data)
            .catch(() => null),
        })
      );

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
