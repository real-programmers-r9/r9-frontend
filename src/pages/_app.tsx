import "@fontsource/roboto";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux"; //리덕스용
import HeadInfo from "src/components/common/HeadInfo";
import Layout from "src/components/common/Layout";
import store from "../redux/store";
import wrapper from "../redux/store";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
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
    </>
  );
};
export default wrapper.withRedux(MyApp); //wrapper로 감싸기 => getStaticPros,getServerSideProps로 store 접근 가능
