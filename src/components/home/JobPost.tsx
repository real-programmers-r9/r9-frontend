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
} from '@mui/material';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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

const JobPost: React.FC = () => {
  /* mock-data */
  const data: IData = {
    id: 1,
    location: '서울시 강남구',
    companyName: '도야짬뽕',
    companyCategory: '일반음식점',
    role: '홀서빙',
    workDay: ['월', '수'],
    workStartTime: '10:00',
    workFinishTime: '16:00',
    calutatePayBy: '일당',
    payRate: 130000,
  };

  const {
    // id,
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

  // const handleAddFavorite = (id: number) => {
  //   console.log(id);
  // };

  return (
    <Grid item sx={{ width: 1 }}>
      <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 5 }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" color="secondary.light">
              {companyCategory}
            </Typography>
            <IconButton
              aria-label="addfavorit"
              //  onClick={() => handleAddFavorite(id)}
            >
              <FavoriteBorderOutlinedIcon />
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
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <LocationOnOutlinedIcon />
              <Typography variant="h6">{location}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <QueryBuilderIcon />
              <Typography variant="h6">
                {workDay.length >= 2 ? workDay.join(', ').split('') : workDay}
              </Typography>
              <Typography variant="h6">
                {workStartTime} ~ {workFinishTime}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <AttachMoneyIcon />
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
        <CardActions sx={{ width: 1, justifyContent: 'space-between' }}>
          {/* 위치 정보 공유 시 거리 노출 예시 */}
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end' }}>
            <Typography color="secondary.light">현 위치로부터</Typography>
            <Typography>200m</Typography>
          </Stack>
          <Button size="large" endIcon={<ChevronRightIcon />} sx={{ fontSize: '1.25rem' }}>
            상세보기
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default JobPost;
