import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import HeadInfo from 'src/components/common/HeadInfo';
import Layout from 'src/components/common/Layout';
import store from 'src/library/redux';
import theme from 'src/styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <HeadInfo
        title="알구"
        keywords="아르바이트, 알바, 소일거리, 중장년"
        description="진짜 시니어를 위한 일자리"
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
};
export default MyApp;
