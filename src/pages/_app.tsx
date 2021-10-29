import { AppProps } from "next/app";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "src/store";
import theme from "src/theme";
import HeadInfo from "src/components/common/HeadInfo";
import Layout from "src/components/common/Layout";

import "@fontsource/roboto";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: "ghostwhite", minHeight: "100vh" }}>
          <HeadInfo
            title="알구"
            keywords="아르바이트, 알바, 소일거리, 중장년"
            description="진짜 시니어를 위한 일자리"
          />
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Box>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
