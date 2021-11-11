import React from "react";
import { useRouter } from "next/router"; // 라우팅해주는 애
import { styled } from "@mui/system"; // 전체 container 스타일링
import { NextPage } from "next";
import {
  Typography,
  Box,
  Rating,
  Divider,
  Card,
  ListItemText,
  Button,
  Container,
} from "@mui/material";
import {
  FavoriteBorderRounded,
  LocalPhoneOutlined,
  RoomOutlined,
} from "@mui/icons-material";
import JobIcons from "~/components/application/JobIcons";

const ContainerBox = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 20,
});

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

const Detail: NextPage = () => {
  const router = useRouter(); // 라우팅 선언
  return (
    <ContainerBox>
      <Card sx={{ p: 4 }}>
        <StyledBox>
          <Typography pt={4} variant="h6" gutterBottom textAlign="center">
            강남역 도야짬뽕
            <FavoriteBorderRounded
              sx={{
                color: "#db0d1e",
                position: "absolute",
                top: "2rem",
                right: "2rem",
              }}
            />
          </Typography>
          <Rating value={3} readOnly />
          <br />
          <Typography variant="button">4.12(12)</Typography>
        </StyledBox>
        {/* 아이콘들 */}
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
            일반음식점 | 홀서빙
          </Typography>
          {JOBDESC1.map((item) => {
            return <ListItemText key={item} primary={item} />;
          })}
          <Typography variant="h6" gutterBottom component="div">
            근무내용
          </Typography>
          {JOBDESC1.map((item) => {
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
        <br />
        <Button
          fullWidth
          onClick={() => router.push("/jobapply")}
          variant="contained"
          color="secondary"
          sx={{ mb: 4 }}
        >
          지원하기
        </Button>
      </Card>
    </ContainerBox>
  );
};

export default Detail;
