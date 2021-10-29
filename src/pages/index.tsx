import type { NextPage } from "next";
import { styled } from "@mui/system";
import JobPost from "src/components/home/JobPost";
import Search from "src/components/home/Search";

const HomePage: NextPage = () => {
  return (
    <ContainerBox>
      <Search />
      <JobPost />
    </ContainerBox>
  );
};

export default HomePage;

const ContainerBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
