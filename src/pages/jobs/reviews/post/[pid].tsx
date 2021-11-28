import React from "react";
import { Card, Container, styled } from "@mui/material";
import ReviewPostEditor from "src/components/review/ReviewPostEditor";

const ContainerBox = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 10,
});

const ReviewPostPage = () => {

  return (
    <>
      <ContainerBox>
        <Card sx={{ p: 4 }}>
          <ReviewPostEditor />
        </Card>
      </ContainerBox>
    </>
  );
};

export default ReviewPostPage;
