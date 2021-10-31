import type { NextPage } from "next";
import { styled } from "@mui/system";
import Search from "src/components/home/Search";
import JobCard2 from "src/components/home/JobCard2";

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
      <JobCard2 />
    </ContainerBox>
  );
};

export default HomePage;
