import {
  Typography,
  Button,
  Container,
  FormControl,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
//타입정의 해야함

const Search = () => {
  const RECOMMENDATIONS = ["돌봄", "청소", "주방보조", "주3회", "당일 알바"];

  return (
    <SearchWrapper>
      <h3>일자리를 검색해보세요</h3>
      <FormControl sx={{ my: 2, width: 1 }}>
        <TextField
          focused
          placeholder="검색어를 입력해주세요"
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="start">
          //       <SearchIcon color="primary" />
          //     </InputAdornment>
          //   ),
          // }}
        />
      </FormControl>
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // textAlign: "center",
  justifyContent: "center",
  width: "70%",
});

//   <Box maxWidth="sm" sx={{ my: 1 }}>
//   <Typography variant="subtitle2" color="secondary.light" gutterBottom>
//     추천 키워드
//   </Typography>
//   <Stack direction="row" spacing={1} justifyContent="center">
//     {recommendKeywords.map((keyword) => (
//       <Button
//         key={keyword.id}
//         variant="outlined"
//         color="primary"
//         size="small"
//         sx={{ borderRadius: 8, p: 0 }}
//       >
//         {keyword.item}
//       </Button>
//     ))}
//   </Stack>
// </Box>

// <Box sx={{ py: 3 }}>
