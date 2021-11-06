import React from "react";
import { Typography, FormControl, TextField, Stack, Box } from "@mui/material";
import { styled } from "@mui/system";

const SearchWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 2,
});

const MiniSearch = () => {
  return (
    <SearchWrapper>
      {/* 검색창 */}

      <FormControl sx={{ width: 400 }}>
        <TextField
          size="small"
          focused
          placeholder="후기를 보고 싶은 일자리를 검색해주세요"
        />
        {/* 추천 검색어 */}
        <Box mt={1}>
          <Stack direction="row" spacing={1} justifyContent="center"></Stack>
        </Box>
      </FormControl>
    </SearchWrapper>
  );
};

export default MiniSearch;
