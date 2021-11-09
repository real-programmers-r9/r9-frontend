import { NextPage } from "next";
import { styled } from "@mui/system";
import Search from "src/components/home/Search";
import JobCard from "src/components/home/JobCard";
import { wrapper } from "src/redux/store";
import { api } from "src/redux/services/api";

const ContainerBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const HomePage: NextPage = () => {
  return (
    <ContainerBox>
      <Search />
      <JobCard />
    </ContainerBox>
  );
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

export default HomePage;
