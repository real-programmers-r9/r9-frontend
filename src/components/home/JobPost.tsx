import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  Button,
  IconButton,
  Stack,
  Divider,
} from "@mui/material";

import {
  QueryBuilder,
  AttachMoney,
  LocationOnOutlined,
  FavoriteBorderOutlined,
  ChevronRight,
} from "@mui/icons-material";

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

const JobPost = () => {
  const data: IData = {
    id: 1,
    location: "성남시 분당구",
    companyName: "이마트24 서현서머섯호텔점",
    companyCategory: "편의점",
    role: "파트타임",
    workDay: ["월", "수", "금"],
    workStartTime: "10:00",
    workFinishTime: "16:00",
    calutatePayBy: "일당",
    payRate: 8720,//여기 시급 & 일당 고쳐야함
  };

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
    <Grid item sx={{ width: 1 }}>
      <Card sx={{ display: "flex", flexDirection: "column", boxShadow: 5 }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="subtitle1" color="secondary.light">
              {companyCategory}
            </Typography>
            <IconButton aria-label="addfavorit">
              <FavoriteBorderOutlined />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            <Typography variant="h4" component="span">
              [{companyName}]
            </Typography>
            <Typography variant="h4" component="span">
              {role}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <LocationOnOutlined />
              <Typography variant="h6">{location}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <QueryBuilder />
              <Typography variant="h6">
                {workDay.length >= 2 ? workDay.join(", ").split("") : workDay}
              </Typography>
              <Typography variant="h6">
                {workStartTime} ~ {workFinishTime}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <AttachMoney />
              <Typography variant="h6">{calutatePayBy}</Typography>
              <Stack direction="row">
                <Typography variant="h6" color="primary">
                  {payRate.toLocaleString()}
                </Typography>
                <Typography variant="h6">원</Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
        <Divider variant="middle" />
        <CardActions sx={{ width: 1, justifyContent: "space-between" }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: "flex-end" }}
          >
            <Typography color="secondary.light">현 위치로부터</Typography>
            <Typography>200m</Typography>
          </Stack>
          <Button
            size="large"
            endIcon={<ChevronRight />}
            sx={{ fontSize: "1.25rem" }}
          >
            상세보기
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default JobPost;
