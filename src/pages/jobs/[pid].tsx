import React from "react";
import { useRouter } from "next/router"; // 라우팅해주는 애
import { styled } from "@mui/system"; // 전체 container 스타일링
import { NextPage } from "next";
import { Card, Button, Container } from "@mui/material";
import dynamic from "next/dynamic";
import JobContents from "~/components/job/JobContents";
import useJobDetailEffect from "~/hooks/job/useJobDetailEffect";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../components/review/ReviewCarousel"),
  { ssr: false }
);

const ContainerBox = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 20,
});

const Detail: NextPage = () => {
  const router = useRouter();

  const { job } = useJobDetailEffect();

  return (
    <ContainerBox>
      <Card sx={{ p: 4 }}>
        <JobContents job={job} />
        <br />
        <DynamicComponentWithNoSSR id={job?.writer?.id} />

        <Button
          fullWidth
          onClick={() => router.push("/jobapply")}
          variant="contained"
          color="secondary"
        >
          지원하기
        </Button>
      </Card>
    </ContainerBox>
  );
};

export default Detail;
