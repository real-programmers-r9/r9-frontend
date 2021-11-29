import React from "react";
import {
  FormControl,
  TextField,
  Stack,
  Box,
  Paper,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const SearchWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 15,
});

const MiniSearch = () => {
  return (
    <SearchWrapper>
      {/* 검색창 */}
      <Paper>
        <FormControl sx={{ width: 400 }}>
          <Stack direction="row" justifyContent="space-between" spacing={0.25}>
            <TextField
              sx={{ width: "100%" }}
              size="small"
              focused
              placeholder="후기를 보고 싶은 일자리를 검색해주세요"
            />
            <Button variant="contained" sx={{ width: "3rem" }}>
              검색
            </Button>
          </Stack>
          <Box>
            <Stack direction="row" spacing={1} justifyContent="center"></Stack>
          </Box>
        </FormControl>
      </Paper>
    </SearchWrapper>
  );
};

export default MiniSearch;
