import React from "react";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
import ReviewPostEditor from "src/components/review/ReviewPostEditor";
import { Card, Container } from "@mui/material";

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
