import { NextPage } from "next";
import { api } from "src/redux/services/api";
import { wrapper } from "src/redux/store";

const ApplicationPage: NextPage = () => {
  return <div>지원자정보 페이지 / 지원하기 페이지</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    if (context.req.headers.cookie) {
      store.dispatch(
        api.endpoints.getMyInfo.initiate(context.req.headers.cookie || "")
      );
      await Promise.all(api.util.getRunningOperationPromises());
    }
    return {
      props: {},
    };
  }
);

export default ApplicationPage;
