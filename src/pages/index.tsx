import type { NextPage } from "next";
import {
  Typography,
  Grid,
  Box,
  Button,
  Stack,
  TextField,
  FormControl,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import JobPost from "src/components/home/JobPost";

const IndexPage: NextPage = () => {
  const recommendKeywords = [
    { id: 1, item: "안양" },
    { id: 2, item: "청소" },
    { id: 3, item: "주방보조" },
    { id: 4, item: "일용직" },
  ];

  return (
    <>
      <Box maxWidth="sm" sx={{ my: 1 }}>
        <Typography variant="subtitle2" color="secondary.light" gutterBottom>
          추천 키워드
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center">
          {recommendKeywords.map((keyword) => (
            <Button
              key={keyword.id}
              variant="outlined"
              color="primary"
              size="small"
              sx={{ borderRadius: 8, p: 0 }}
            >
              {keyword.item}
            </Button>
          ))}
        </Stack>
      </Box>
      <FormControl sx={{ my: 2, width: 1 }}>
        <TextField
          variant="standard"
          color="primary"
          focused
          placeholder="검색어를 입력해주세요"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
      <Box sx={{ py: 3 }}>
        <Grid container spacing={4}>
          <JobPost />
        </Grid>
      </Box>
    </>
  );
};

export default IndexPage;
