import React from "react";
import {
  Typography,
  Box,
  Rating,
  Divider,
  ListItemText,
  Stack,
  Button,
  Container,
} from "@mui/material";
import {
  FavoriteBorderRounded,
  AttachMoneyRounded,
  WorkOutlineOutlined,
  AccessTimeOutlined,
  RoomOutlined,
  LocalPhoneOutlined,
} from "@mui/icons-material";
import { api } from "src/redux/services/api";
import { wrapper } from "src/redux/store";

const Detail = () => {
  return (
    <Box>
      <Container className="titlebar">
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          textAlign="center"
          fontWeight="bold"
        >
          강남역 도야짬뽕 홀서빙
          <FavoriteBorderRounded
            sx={{ position: "absolute", right: "3rem", height: "1.3em" }}
          />
        </Typography>
      </Container>
      {/* Rating system */}
      <Container
        className="favoriteRate"
        sx={{
          "& > legend": { mt: 2 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography component="legend" />
        <Rating name="read-only" readOnly />
        <Typography>4.12(12)</Typography>
      </Container>
      {/* navbar */}
      <Container
        className="navbar"
        sx={{
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
          <Box
            id="navicon-1"
            sx={{
              border: "1px solid #ccc",
              padding: "0.3rem",
              paddingTop: "0.2rem",
              paddingBottom: "0.1rem",
              margin: "1rem",
              borderRadius: 2,
            }}
          >
            <RoomOutlined />
          </Box>
          <Typography sx={{ fontSize: "13px" }}>서울 강남구</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            id="navicon-2"
            sx={{
              border: "1px solid #ccc",
              padding: "0.3rem",
              paddingTop: "0.2rem",
              paddingBottom: "0.1rem",
              margin: "1rem",
              borderRadius: 2,
            }}
          >
            <AttachMoneyRounded />
          </Box>
          <Typography sx={{ fontSize: "13px" }}>일당 13만원</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            id="navicon-3"
            sx={{
              border: "1px solid #ccc",
              padding: "0.2rem 0.3rem 0.1rem",
              margin: "1rem",
              borderRadius: 2,
            }}
          >
            <WorkOutlineOutlined />
          </Box>
          <Typography sx={{ fontSize: "13px" }}>홀서빙</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            id="navicon-4"
            sx={{
              border: "1px solid #ccc",
              padding: "0.2rem 0.3rem 0.1rem",
              margin: "1rem",
              borderRadius: 2,
            }}
          >
            <AccessTimeOutlined />
          </Box>
          <Typography sx={{ fontSize: "11.5px" }}>17:00~21:00</Typography>
          <Typography sx={{ fontSize: "12px" }}>협의가능</Typography>
        </Box>
      </Container>
      {/* 일자리 상세내용 1 */}
      <Divider />
      <Container className="jobDetail1">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ paddingTop: "1rem", fontWeight: "bold" }}
        >
          일반음식점 | 홀서빙
        </Typography>
        <ListItemText primary="50대 선호 | 성별무관" />
        <ListItemText primary="학력 무관 | 경력무관" />
        <ListItemText primary="2021.12.31까지 채용가능" />
      </Container>
      <br />
      {/* 일자리 상세내용 2 */}
      <Divider />
      <Container className="jobDetail2">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ paddingTop: "1rem", fontWeight: "bold" }}
        >
          근무내용
        </Typography>
        <ListItemText primary="점심시간 카운터" />
        <ListItemText primary="저녁시간 홀서빙" />
      </Container>
      <br />
      {/* 채용방법 */}
      <Divider />
      <Container className="jobEmploy">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ paddingTop: "1rem" }}
        >
          채용방법
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <LocalPhoneOutlined />
          <Typography>전화면접</Typography>
        </Box>
      </Container>
      <br />
      {/* 근무지역 */}
      <Divider />
      <Container className="jobPlace">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ paddingTop: "1rem", fontWeight: "bold" }}
        >
          근무지역
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <RoomOutlined />
          <Typography>서울특별시 강남구 논현동 강남역 3번출구</Typography>
        </Box>
      </Container>
      {/* 카카오 지도 Api */}
      <Container className="map">{/* ? */}</Container>
      <Divider />
      <br />
      {/* 지원하기 버튼 */}
      <Stack className="applyButton">
        <Button variant="contained">지원하기</Button>
      </Stack>
    </Box>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    if (context.req.headers.cookie) {
      store.dispatch(
        api.endpoints.getMyInfo.initiate(context.req.headers.cookie || "")
      );
      await Promise.all(api.util.getRunningOperationPromises());
    }
    return {
      props: {},
    };
  }
);

export default Detail;
