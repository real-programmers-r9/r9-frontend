import { useEffect } from "react";
import {
  Box,
  Chip,
  Grid,
  Paper,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { styled } from "@mui/system";
import SortButtons from "./SortButtons";
import { Data } from "~/pages";
// import useFetch from "./../../hooks/job/fetchApi"; // api-fetching hook
import { useDispatch } from "react-redux";
import { addJobs } from "../../redux/slices/jobSlice";
import { findJobsAPI } from "../../libs/api/job";

const StyledBox = styled(Paper)(({ theme }) => ({
  paddingTop: 20,
  [theme.breakpoints.down("md")]: {
    paddingTop: 10,
  },
}));

const Cards = styled(Grid)({
  marginTop: 10,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});

export interface JobCardProps {
  data: Data[];
}

const JobCard = ({ data }: JobCardProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      const jobs = await findJobsAPI().catch(console.error);
      // console.log("잡", jobs);
      dispatch(addJobs(jobs)); // 여기 확인 필요
    };
    fetchJobs();
  }, []);

  return (
    <Cards container spacing={3}>
      <Grid item xs={12} md={12}>
        <SortButtons />
      </Grid>

      {data.map((item) => {
        return (
          <Grid item xs={10} md={6} key={item.id}>
            <StyledBox>
              <Box sx={{ mx: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {item.companyName}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {/* 위치정보 넣기  FU */}
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

                <Box pt={1}>
                  <Stack direction="row" spacing={1}>
                    {item.hashtags.map((hashtag) => (
                      <Chip key={hashtag} label={hashtag} />
                    ))}
                  </Stack>
                </Box>
              </Box>
              <Box mx={2}>
                <Button
                  onClick={() => router.push("/detail2")}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ my: 2 }}
                >
                  상세보기
                </Button>
              </Box>
            </StyledBox>
          </Grid>
        );
      })}
    </Cards>
  );
};

export default JobCard;
