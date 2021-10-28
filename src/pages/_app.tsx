import "@fontsource/roboto";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
// import { Provider } from "react-redux"; //리덕스용
import { ThemeProvider } from "@mui/material/styles";
import HeadInfo from "src/components/common/HeadInfo";
import Layout from "src/components/common/Layout";
import { theme } from "../styles/theme";
// import store from "../redux/store";
// import wrapper from "../redux/store";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <HeadInfo
        title="알구"
        keywords="아르바이트, 알바, 소일거리, 중장년"
        description="시니어를 위한 일자리 정보"
      />

      <CssBaseline />
      <Layout>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  );
};

export default MyApp;
// export default wrapper.withRedux(MyApp); //wrapper로 감싸기 => getStaticPros,getServerSideProps로 store 접근 가능
