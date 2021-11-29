import React from "react";
import { Typography, Box, Container } from "@mui/material";
import {
  AttachMoneyRounded,
  WorkOutlineOutlined,
  AccessTimeOutlined,
  CalendarToday,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import useJobDetailEffect from "~/hooks/job/useJobDetailEffect";

const StyledBox = styled(Box)({
  textAlign: "center",
  position: "relative", // 하트표시 기준
});

export default function JobIcons() {
  const { job, pid } = useJobDetailEffect();
  return (
    <div>
      <Container
        className="navbar"
        sx={{
          // maxWidth: "200px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 공통스타일 styledBox로 정리 */}
          <StyledBox id="navicon-1">
            <CalendarToday />
          </StyledBox>
          <Typography variant="subtitle2">{job?.period}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StyledBox id="navicon-2">
            <AttachMoneyRounded />
          </StyledBox>
          <Typography variant="subtitle2">
            {job?.payment === "PERHOUR"
              ? "시급"
              : job?.payment === "PERDAY"
              ? "일급"
              : "월급"}
            {job?.wage}원
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StyledBox id="navicon-3">
            <WorkOutlineOutlined />
          </StyledBox>
          <Typography variant="subtitle2"> {job?.workType}</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StyledBox id="navicon-4">
            <AccessTimeOutlined />
          </StyledBox>
          {/* <Typography sx={{ fontSize: "11.5px" }}>17:00~21:00</Typography> */}
          <Typography variant="subtitle2">
            {job?.startTime} ~ {job?.endTime}
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
