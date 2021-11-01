import {
  InputLabel,
  MenuItem,
  ListSubheader,
  FormControl,
  Select,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";

const SortBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
});

const SortButton = styled(FormControl)({
  minWidth: 100,
  minHeight: 5,
  fontSize: 10,
  marginRight: 5,
});

// 타입정의 해야함
const SortButtons = () => {
  return (
    <SortBox>
      {/* 아이콘이 미묘하게 라인 안맞음 */}
      <Typography variant="h6" component="div">
        오늘의 새 일자리
      </Typography>
      <Box sx={{ m: 1 }}>
        {/* 지역 */}
        <SortButton size="small">
          <InputLabel htmlFor="grouped-native-select">검색지역</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="검색지역"
          >
            <option aria-label="None" value="" />
            <optgroup label="서울">
              <option value={1}>마포구</option>
              <option value={2}>강남구</option>
            </optgroup>
            <optgroup label="경기">
              <option value={3}>인천시</option>
              <option value={4}>성남시</option>
            </optgroup>
          </Select>
        </SortButton>
        {/* 요일 */}
        <SortButton size="small">
          <InputLabel htmlFor="grouped-select">시간대</InputLabel>
          <Select defaultValue="" id="grouped-select" label="시간">
            <MenuItem value={1}>오전</MenuItem>
            <MenuItem value={2}>오후</MenuItem>
            <MenuItem value={2}>주말</MenuItem>
          </Select>
        </SortButton>
        {/* 일자리 종류 */}
        <SortButton size="small">
          <InputLabel htmlFor="grouped-select">일자리</InputLabel>
          <Select defaultValue="" id="grouped-select" label="일자리">
            <ListSubheader>단기알바</ListSubheader>
          </Select>
        </SortButton>
      </Box>
    </SortBox>
  );
};

export default SortButtons;
