import React from "react";
import { Typography, Box, Container } from "@mui/material";
import {
  AttachMoneyRounded,
  WorkOutlineOutlined,
  AccessTimeOutlined,
  RoomOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)({
  textAlign: "center",
  position: "relative", // 하트표시 기준
});

export default function JobIcons() {
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
            <RoomOutlined />
          </StyledBox>
          <Typography variant="subtitle2">서울 강남구</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StyledBox id="navicon-2">
            <AttachMoneyRounded />
          </StyledBox>
          <Typography variant="subtitle2">일당 13만원</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StyledBox id="navicon-3">
            <WorkOutlineOutlined />
          </StyledBox>
          <Typography variant="subtitle2">홀서빙</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <StyledBox id="navicon-4">
            <AccessTimeOutlined />
          </StyledBox>
          {/* <Typography sx={{ fontSize: "11.5px" }}>17:00~21:00</Typography> */}
          <Typography variant="subtitle2">협의가능</Typography>
        </Box>
      </Container>
    </div>
  );
}
