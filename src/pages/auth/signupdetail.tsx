import React from "react";
import { NextPage } from "next";
import {
  Stack,
  Chip,
  Paper,
  styled,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";

const occupations = [
  "외식﹒음료",
  "매장관리﹒판매",
  "서비스",
  "사무직",
  "고객상담﹒리서치﹒영업",
  "생산﹒건설﹒노무",
  "IT﹒기술",
  "디자인",
  "미디어",
  "운전﹒배달",
  "병원﹒간호﹒연구",
  "교육﹒강사",
];

const ages = ["#2학년", "#3학년", "#4학년", "#5학년", "#6학년", "#7학년"];

const advantages = [
  "#코딩 가능",
  "#간호 가능",
  "#배달 가능",
  "#회계 가능",
  "#운전 가능",
  "#빠른 계산 가능",
];

const workingTimes = [
  "#주 1회",
  "#주 2회",
  "#주 3회",
  "#주간",
  "#야간",
  "#새벽",
  "#주말",
  "#평일",
  "#프리",
];

export const Tag = styled(Chip)(({ theme }) => ({
  width: "100%",
  ":hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  ":active": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const SignUpDetailPage: NextPage = () => {
  const router = useRouter();

  return (
    <Paper sx={{ padding: 2 }}>
      <Stack spacing={4}>
        <Typography align="center" variant="h6">
          맞춤형 일거리를 위해
          <br />
          아래 항목을 선택해 주세요.
        </Typography>
        <Stack spacing={1}>
          <Typography>나의 정보는?</Typography>
          <Grid container>
            {ages.map((item) => (
              <Grid key={item} item xs={4} p={0.25}>
                <Tag label={item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack spacing={1}>
          <Typography>나의 장점은?</Typography>
          <Grid container>
            {advantages.map((item) => (
              <Grid key={item} item xs={4} p={0.25}>
                <Tag label={item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack spacing={1}>
          <Typography>선호 근무 시간은?</Typography>
          <Grid container>
            {workingTimes.map((item) => (
              <Grid key={item} item xs={4} p={0.25}>
                <Tag label={item} />
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Stack spacing={1}>
          <Typography>선호하는 직종은?</Typography>
          <Grid container>
            <Grid item xs={6} p={0.25}>
              <FormControl fullWidth size="small">
                <InputLabel id="occupations-label">업직종</InputLabel>
                <Select
                  labelId="occupations-label"
                  id="occupations"
                  label="업직종"
                >
                  {occupations.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} p={0.25}>
              <FormControl fullWidth size="small">
                <InputLabel id="deltail-occupations-label">상세</InputLabel>
                <Select
                  labelId="deltail-occupations-label"
                  id="deltail-occupations"
                  label="상세"
                >
                  <MenuItem value="전체">전체</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Stack>
        <Button
          fullWidth
          variant="contained"
          onClick={() => router.push("/auth/signin")}
        >
          확인
        </Button>
      </Stack>
    </Paper>
  );
};

export default SignUpDetailPage;
