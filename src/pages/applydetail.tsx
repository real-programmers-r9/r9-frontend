import { NextPage } from "next"; // what is this?
import PersonIcon from "@mui/icons-material/Person";
import {
  Typography,
  IconButton,
  Box,
  Card,
  TextField,
  Container,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import Jobtags from "src/components/application/Jobtags";

const ContainerBox = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

const ProfileImage = styled(IconButton)({
  background: "#796f6f",
  borderRadius: "50",
  padding: 50,
  color: "#fff",
});

const StyledBtn = styled(Button)({
  color: "#fff",
});
// mock data로 바꾸기
const hashtages1 = ["문서 작업", "매장 관리", "운전 가능"];
const hashtages2 = ["주3회", "평일 오전", "오픈시간"];
const hashtages3 = ["마포구", "종로구", "서울시"];

// 타입정의 해야함
const JobApplyPage = () => {
  return (
    <ContainerBox px={6}>
      <Card>
        {/* 지원자 정보 */}
        <Box pt={4}>
          <ProfileImage>
            <PersonIcon size="large" />
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
          <Jobtags title={"나의 장점은?"} type={hashtages1} />
          <Jobtags title={"선호 시간대"} type={hashtages2} />
          <Jobtags title={"근무 가능 지역?"} type={hashtages3} />
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
          <TextField
            multiline
            rows={2}
            fullWidth
            placeholder="세부사항 기입했음"
          />
        </Box>
        <Box p={2}>
          <StyledBtn fullWidth variant="contained" size="large">
            연락하기
          </StyledBtn>
        </Box>
      </Card>
    </ContainerBox>
  );
};

export default JobApplyPage;
