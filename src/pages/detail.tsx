import React from "react";
import { useRouter } from "next/router"; // 라우팅해주는 애
import { styled } from "@mui/system"; // 전체 container 스타일링
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

const ContainerBox = styled(Container)(({ theme }) => ({
  display: "flex",
  width: "28vw",
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: "center",
  textAlign: "center",
  backgroundColor: "#fff",
  position: "relative", // 하트표시 기준
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

const StyledBox = styled(Box)({
  border: "1px solid #ccc",
  padding: "0.3rem",
  paddingTop: "0.2rem",
  paddingBottom: "0.1rem",
  margin: "1rem",
  borderRadius: 2,
});

const Detail = () => {
  const router = useRouter(); // 라우팅 선언
  return (
    <ContainerBox sx={{ padding: 2 }}>
      <Box p={4} className="titlebar">
        {/* <br /> */}
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          textAlign="center"
          fontWeight="bold"
        >
          강남역 도야짬뽕
          <FavoriteBorderRounded
            // fontSize="large"
            sx={{
              color: "#db0d1e",
              position: "absolute",
              top: "1rem",
              right: "1rem",
            }}
          />
        </Typography>
      </Box>
      {/* Rating system */}
      <Box sx={{ textAlign: "left" }}>
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
        {/* <Box sx={{ textAlign: "left" }}> */}
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
            <Typography sx={{ fontSize: "11.5px" }}>17:00~21:00</Typography>
            <Typography sx={{ fontSize: "12px" }}>협의가능</Typography>
          </Box>
        </Container>
        {/* 일자리 상세내용 1 */}
        <Divider />
        {/* <Box sx={{ textAlign: "left" }}> */}
        <Container className="jobDetail1">
          <Typography pt={3} variant="h6" gutterBottom component="div">
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
          <Typography variant="h6" gutterBottom component="div">
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
            variant="h6"
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
          <Typography variant="h6" gutterBottom component="div">
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
        {/* <Stack className="applyButton"> */}
        <Button
          pb={4}
          fullWidth
          onClick={() => router.push("/jobapply")}
          variant="contained"
        >
          지원하기
        </Button>
      </Box>
      {/* </Stack> */}
    </ContainerBox>
  );
};

export default Detail;
