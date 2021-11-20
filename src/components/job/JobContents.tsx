import {
  FavoriteBorderRounded,
  LocalPhoneOutlined,
  RoomOutlined,
} from "@mui/icons-material";
import {
  Container,
  Divider,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Box, styled } from "@mui/system"; // 전체 container 스타일링
import JobIcons from "../application/JobIcons";
import { useDispatch, useSelector } from "react-redux";
import { selectJob, setJob } from "~/redux/slices/job-slice";

import useJobDetailEffect from "~/hooks/job/useJobDetailEffect";
import { findJobByIdAPI } from "~/libs/api/job";

const StyledBox = styled(Box)({
  textAlign: "center",
  position: "relative", // 하트표시 기준
});
// 백데이터 넣기
const JOBDESC1 = [
  "50대 선호 | 성별무관",
  "학력 무관 | 경력무관",
  "2021.12.31까지 채용가능",
];
const JOBDESC2 = ["경력자 우대", "점심시간 카운터", "저녁시간 홀서빙"];

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
        <Rating value={3} readOnly />
        <br />
        <Typography variant="button">4.12(12)</Typography>
      </StyledBox>
      <JobIcons />
      <Box p={1} sx={{ textAlign: "left" }}>
        <Divider />
        <Typography
          // align="center"
          pt={2}
          variant="h6"
          gutterBottom
          component="div"
        >
          {job?.sectors}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          근무내용
        </Typography>
        <Typography gutterBottom component="div">
          {job?.age}대 선호 |{" "}
          {job?.gender === "ANY"
            ? "성별무관"
            : job?.gender === "MAIL"
            ? "남성"
            : "여성"}
        </Typography>
        {JOBDESC2.map((item) => {
          return <ListItemText key={item} primary={item} />;
        })}
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
