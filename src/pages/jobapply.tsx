import React from "react";
import { NextPage } from "next";
import {
  Typography,
  IconButton,
  Box,
  Card,
  TextField,
  Container,
  Button,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { styled } from "@mui/system";
import { JobTags } from "~/components/application/JobTags";

const ContainerBox = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "26vw",
  // justifyContent: "center",
  textAlign: "center",
  backgroundColor: "#fff",
  position: "relative", // 하트표시 기준
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

const ProfileImage = styled(IconButton)({
  background: "#796f6f",
  borderRadius: "50",
  padding: 30,
  color: "#fff",
});

const StyledBtn = styled(Button)({
  color: "#fff",
});

const hashtages1 = ["문서 작업", "매장 관리", "운전 가능"];
const hashtages2 = ["주3회", "평일 오전", "오픈시간"];
const hashtages3 = ["마포구", "종로구", "서울시"];

const JobApplyPage: NextPage = () => {
  return (
    <ContainerBox>
      <Box>
        {/* 지원자 정보 */}
        <Box pt={4}>
          <ProfileImage>
            <Person fontSize="large" />
          </ProfileImage>
          <Typography mt={2} gutterBottom variant="subtitle2" component="div">
            홍길동 (65세)
          </Typography>
        </Box>
        <Box p={2} sx={{ width: "70%", textAlign: "left" }}>
          <Typography variant="body2">주소</Typography>
          <Typography variant="body2">휴대전화</Typography>
          <Typography variant="body2">메일주소</Typography>
        </Box>
        {/* 태그 */}
        <Box>
          <JobTags title="나의 장점은?" type={hashtages1} />
          <JobTags title="선호 시간대" type={hashtages2} />
          <JobTags title="근무 가능 지역?" type={hashtages3} />
        </Box>

        <Box px={2}>
          <Typography
            align="left"
            gutterBottom
            variant="subtitle2"
            component="div"
          >
            추가사항
          </Typography>
          <TextField multiline rows={2} fullWidth />
        </Box>
        <Box p={2}>
          <StyledBtn fullWidth variant="contained" size="large">
            지원하기
          </StyledBtn>
        </Box>
      </Box>
    </ContainerBox>
  );
};

export default JobApplyPage;
