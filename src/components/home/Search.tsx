import React, { useState } from "react";
import {
  Typography,
  FormControl,
  TextField,
  Chip,
  IconButton,
  Stack,
  Box,
} from "@mui/material";
import { ManageSearch } from "@mui/icons-material";
import { styled } from "@mui/system";
import JobCard, { data } from "./JobCard";

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

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchWrapper>
      {/* 검색창 */}
      <Typography mt={4} gutterBottom variant="h6" component="div">
        일자리 검색
      </Typography>
      <FormControl sx={{ maxWidth: 800 }}>
        <StyledStack py={1} spacing={1} direction="row" justifyContent="center">
          <TextField
            size="small"
            focused
            placeholder="검색어를 입력해주세요"
            onChange={(
              event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              searchTerm(event.target.value);
            }}
          />
          <IconButton
            onClick={() => {
              {
                data?.map((item) => {
                  return <JobCard data={data} />;
                });
              }
            }}
            aria-label="delete"
          >
            <ManageSearch fontSize="large" />
          </IconButton>
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
  );
};

export default Search;
