import React, { useState } from "react";
import { NextPage } from "next";
import { styled } from "@mui/system";
import { Typography, FormControl, TextField, Chip, Stack } from "@mui/material";
import JobCard from "~/components/home/JobCard";

export interface Data {
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
  hashtags: string[];
}

export const data: Data[] = [
  {
    id: 1,
    location: "성남시 분당구",
    companyName: "이마트24 서현점",
    companyCategory: "편의점",
    role: "파트타임",
    workDay: ["월", "수", "금"],
    workStartTime: "10:00",
    workFinishTime: "16:00",
    calutatePayBy: "시급",
    payRate: 8720,
    hashtags: ["주3일", "급구"],
  },
  {
    id: 2,
    location: "서울 동작구",
    companyName: "부산어묵 노량진점",
    companyCategory: "일반음식점",
    role: "단기알바",
    workDay: ["요일협의"],
    workStartTime: "18:00",
    workFinishTime: "23:00",
    calutatePayBy: "시급",
    payRate: 11000,
    hashtags: ["평일", "시급"],
  },
  {
    id: 3,
    location: "안산시 상록구",
    companyName: "닥엔돈스",
    companyCategory: "일반음식점",
    role: "파트타임",
    workDay: ["스케쥴 협의"],
    workStartTime: "",
    workFinishTime: "",
    calutatePayBy: "시급",
    payRate: 10000,
    hashtags: ["주3일", "급구"],
  },
  {
    id: 4,
    location: "서울 종로구",
    companyName: "인크루트알바콜",
    companyCategory: "음성수집",
    role: "단기알바",
    workDay: ["평일"],
    workStartTime: "09:00",
    workFinishTime: "18:00",
    calutatePayBy: "건별",
    payRate: 200,
    hashtags: ["평일", "급구"],
  },
];

const ContainerBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const SearchWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "70%",
  marginBottom: 2,
});

const StyledStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
});

const HASHTAGS = ["돌봄", "주3회", "시니어 일자리", "당일 알바"];

const HomePage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ContainerBox>
      {/* 검색창 */}
      <SearchWrapper>
        {/* 검색창 */}
        <Typography mt={4} gutterBottom variant="h6" component="div">
          일자리 검색
        </Typography>
        <FormControl sx={{ maxWidth: 800 }}>
          <StyledStack
            py={1}
            spacing={1}
            direction="row"
            justifyContent="center"
          >
            <TextField
              size="small"
              focused
              value={searchTerm}
              placeholder="검색어를 입력해주세요"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </StyledStack>

          {/* 추천 검색어 */}
          {/* <Box mt={1}> */}
          <Stack direction="row" spacing={1} justifyContent="center">
            {/* key값으로 index넣으면 안됨 */}
            {HASHTAGS.map((item) => (
              <Chip key={item} label={item} />
            ))}
          </Stack>
          {/* </Box> */}
        </FormControl>
      </SearchWrapper>
      <JobCard data={data} />
    </ContainerBox>
  );
};

export default HomePage;
