import React from "react";
import { Typography, Box, Stack, Chip } from "@mui/material";
import { styled } from "@mui/system";

export interface JobTagsProps {
  title: string;
  type: string[];
}

const StyledChip = styled(Chip)({
  width: 90,
  // &:hover {
  //   color:"pink"
  // }
});

export const JobTags = ({ title, type }: JobTagsProps) => {
  return (
    <Box m={2}>
      <Typography align="left" gutterBottom variant="subtitle2">
        {title}
      </Typography>
      <Stack direction="row" spacing={1} justifyContent="center">
        {/* 클릭 이벤트 넣기 */}
        {type.map((item) => (
          <StyledChip key={item} label={item} />
        ))}
      </Stack>
    </Box>
  );
};
