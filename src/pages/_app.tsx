import "@fontsource/roboto";
import { AppProps } from "next/app";
import { Box, CssBaseline } from "@mui/material/";
import { Provider } from "react-redux";
import HeadInfo from "src/components/common/HeadInfo";
import Layout from "src/components/common/Layout";
import store from "src/libs/redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Box sx={{ bgcolor: "ghostwhite", minHeight: "100vh" }}>
      <HeadInfo
        title="알구"
        keywords="아르바이트, 알바, 소일거리, 중장년"
        description="진짜 시니어를 위한 일자리"
      />
      <Provider store={store}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Box>
  );
};
export default MyApp;
