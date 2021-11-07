import { NextPage } from "next";
import { styled } from "@mui/system";
import Search from "src/components/home/Search";
import JobCard from "src/components/home/JobCard";

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

export default HomePage;
