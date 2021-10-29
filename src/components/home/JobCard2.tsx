import {
  Box,
  Chip,
  Card,
  Grid,
  Stack,
  Button,
  Typography,
} from "@mui/material";

import { styled } from "@mui/system";
import SortButtons from "./SortButtons";

interface IData {
  id: number;
  location: string;
  companyName: string;
  companyCategory: string;
  role: string;
  workDay: string[];
  workStartTime: string;
  workFinishTime: string;
  calutatePayBy: string;
  payRate: number;
}

const JobCard2 = () => {
  const data: IData = [
    {
      location: "성남시 분당구",
      companyName: "이마트24 서현서머섯호텔점",
      companyCategory: "편의점",
      role: "파트타임",
      workDay: ["월", "수", "금"],
      workStartTime: "10:00",
      workFinishTime: "16:00",
      calutatePayBy: "시급",
      payRate: 8720,
    },
    {
      location: "서울 동작구",
      companyName: "부산어묵 노량진점",
      companyCategory: "일반음식점",
      role: "단기알바",
      workDay: ["요일협의"],
      workStartTime: "18:00",
      workFinishTime: "23:00",
      calutatePayBy: "시급",
      payRate: 11000,
    },
    {
      location: "안산시 상록구",
      companyName: "닥엔돈스",
      companyCategory: "일반음식점",
      role: "파트타임",
      workDay: ["스케쥴 협의"],
      workStartTime: "",
      workFinishTime: "",
      calutatePayBy: "시급",
      payRate: 10000,
    },
    {
      location: "서울 종로구",
      companyName: "인크루트알바콜",
      companyCategory: "음성수집",
      role: "단기알바",
      workDay: ["평일"],
      workStartTime: "09:00",
      workFinishTime: "18:00",
      calutatePayBy: "건별",
      payRate: 200,
    },
  ];

  const {
    location,
    companyName,
    companyCategory,
    role,
    workDay,
    workStartTime,
    workFinishTime,
    calutatePayBy,
    payRate,
  } = data;

  return (
    <Cards container spacing={3}>
      <Grid item sx={12} md={12}>
        <SortButtons />
      </Grid>

      {/*맵 돌렸는데 카드 모양이랑 크기가 다름 ==why*/}
      {data.map((item, i) => {
        return (
          <Grid item sx={8} md={5} key={i}>
            <Box>
              <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.companyName}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {/* 위치정보 넣기  FU*/}
                      1.5km
                    </Typography>
                  </Grid>
                </Grid>
                <Typography color="text.secondary" variant="body2">
                  {item.location}
                  <br />
                  {item.role}
                  <br />
                  요일선택: {item.workDay}
                  <br />
                  {item.calutatePayBy}: {item.payRate.toLocaleString()}
                </Typography>
              </Box>
              {/* 태그 */}
              <Box sx={{ m: 1 }}>
                <Stack direction="row" spacing={1}>
                  <Chip label="캐셔" />
                  <Chip label="주3회" />
                </Stack>
              </Box>
              <Button sx={{ color: "#fff" }} fullWidth variant="contained">
                상세보기
              </Button>
            </Box>
          </Grid>
        );
      })}
    </Cards>
  );
};

export default JobCard2;

const Cards = styled(Grid)({
  marginTop: 10,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});
