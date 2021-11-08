import React from "react";
import { Avatar, Box, Stack, Typography, StackProps } from "@mui/material";
import { User } from "src/types/user";

export interface UserInfoProps extends StackProps {
  user: User;
}

export const UserInfo = ({ user, ...rest }: UserInfoProps) => (
  <Stack direction="row" {...rest}>
    <Stack spacing={1} direction="row">
      <Avatar alt="profile" src={user.profileImage} />
      <Box>
        <Typography variant="body2">{user.name}</Typography>
        <Typography variant="body2">{user.email}</Typography>
      </Box>
    </Stack>
  </Stack>
);
