import {
  FavoriteBorderRounded,
  LocalPhoneOutlined,
  RoomOutlined,
} from "@mui/icons-material";
import { Container, Divider, Rating, Typography } from "@mui/material";
import React from "react";
import { Box, styled } from "@mui/system"; // 전체 container 스타일링
import JobIcons from "../application/JobIcons";

import useJobDetailEffect from "~/hooks/job/useJobDetailEffect";

const StyledBox = styled(Box)({
  textAlign: "center",
  position: "relative", // 하트표시 기준
});
// 백데이터 넣기

const JobContents = () => {
  const { job, pid } = useJobDetailEffect();
  return (
    <>
      <StyledBox>
        <FavoriteBorderRounded
          sx={{
            color: "#db0d1e",
            float: "right",
          }}
        />
        <Typography pt={4} variant="h6" gutterBottom textAlign="center">
          {job?.title}
        </Typography>
        <Box>{job?.status}</Box>
        <Rating value={3} readOnly />
        <br />
        <Typography variant="button">4.12(12)</Typography>
      </StyledBox>
      <JobIcons />
      <Box p={1} sx={{ textAlign: "left" }}>
        <Divider />
        <Typography pt={2} variant="h6" gutterBottom component="div">
          근무 조건
        </Typography>
        <Typography gutterBottom component="div">
          <li>{job?.age}대 선호</li>
          <li>
            {job?.gender === "ANY"
              ? "성별무관"
              : job?.gender === "MAIL"
              ? "남성"
              : "여성"}{" "}
            선호
          </li>
          <li>근무 요일 : {job?.workingDay}</li>
          <li>
            근무 시간 : {job?.startTime} ~ {job?.endTime}
          </li>
          <li>업직종 : {job?.sectors}</li>
          <li>근무 기간 : {job?.period}</li>
        </Typography>

        <Divider />
        <Typography variant="h6" gutterBottom component="div">
          근무내용
        </Typography>
        {job?.detail}
        <Divider />
        {/* job 세부2 */}
        <Typography pt={2} variant="h6" gutterBottom>
          채용방법
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <LocalPhoneOutlined />
          <Typography>전화면접</Typography>
        </Box>
        <Typography pt={1} variant="h6" gutterBottom component="div">
          근무지역
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <RoomOutlined />
          <Typography>서울특별시 강남구 논현동 강남역 3번출구</Typography>
        </Box>
      </Box>
      {/* 카카오 지도 Api */}
      <Container className="map">{/* ? */}</Container>
    </>
  );
};

export default JobContents;
