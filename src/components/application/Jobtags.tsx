import { Typography, Box, Stack, Chip } from "@mui/material";

//타입정의

const Jobtags = ({ title, type }) => {
  return (
    <Box m={2}>
      <Typography align="left" gutterBottom variant="subtitle2">
        {title}
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="center">
        {/* 클릭 이벤트 넣기 */}
        {/* key값으로 index넣으면 안됨 */}
        {type.map((item) => (
          <Chip sx={{ width: 80 }} key={item} label={item} />
        ))}
      </Stack>
    </Box>
  );
};
export default Jobtags;
