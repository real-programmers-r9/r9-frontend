import { AppProps } from "next/app";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "src/store";
import theme from "src/theme";
import Layout from "src/components/common/Layout";

import "@fontsource/roboto";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: "ghostwhite", minHeight: "100vh" }}>
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
