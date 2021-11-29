import { Container, styled } from "@mui/material";
import React from "react";
import ApplyerList from "~/components/apply/applyerList";

const ContainerBox = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 10,
});

const applyer = () => {
  return (
    <ContainerBox>
      <ApplyerList />
    </ContainerBox>
  );
};

export default applyer;
