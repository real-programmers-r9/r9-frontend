import {
  Typography,
  FormControl,
  TextField,
  Stack,
  Box,
  Chip,
} from "@mui/material";
import { styled } from "@mui/system";

const SearchWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "70%",
  marginBottom: 2,
});

const Search = () => {
  const RECOMMENDATIONS = ["돌봄", "주3회", "시니어 일자리", "당일 알바"];

  return (
    <SearchWrapper>
      {/* 검색창 */}
      <Typography mt={4} gutterBottom variant="h6" component="div">
        일자리 검색하기
      </Typography>
      <FormControl sx={{ maxWidth: 800 }}>
        <TextField size="small" focused placeholder="검색어를 입력해주세요" />
        {/* 추천 검색어 */}
        <Box mt={1}>
          <Stack direction="row" spacing={1} justifyContent="center">
            {/* 클릭 이벤트 넣기 */}
            {/* key값으로 index넣으면 안됨 */}
            {RECOMMENDATIONS.map((item) => (
              <Chip key={item} label={item} />
            ))}
          </Stack>
        </Box>
      </FormControl>
    </SearchWrapper>
  );
};

export default Search;
