import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Paper, Stack, Typography, TextField, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import { Controller } from "react-hook-form";
import { usePostAuthMutation } from "~/redux/services/api";
import { useSignInForm } from "~/hooks/forms/useSignInForm";

const SignInPage: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, control } = useSignInForm();

  const [postAuthMutation, { isLoading }] = usePostAuthMutation();

  const onSubmit = handleSubmit(async (data) => {
    if (isLoading) {
      return;
    }

    await postAuthMutation(data)
      .unwrap()
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        enqueueSnackbar(
          error.data.message || "예기치 못한 에러가 발생했습니다.",
          {
            variant: "error",
          }
        );
      });
  });

  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      noValidate
      sx={{
        margin: "auto",
        paddingX: {
          xs: 2,
          sm: 4,
        },
        paddingY: {
          xs: 3,
          sm: 6,
        },
        maxWidth: "sm",
      }}
    >
      <Stack spacing={4}>
        <Typography variant="h5" align="center">
          로그인
        </Typography>
        <Stack spacing={2}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type="email"
                label="이메일"
                fullWidth
                size="small"
                value={value || ""}
                error={!!error}
                helperText={error?.message}
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                type="password"
                label="비밀번호"
                fullWidth
                size="small"
                value={value || ""}
                error={!!error}
                helperText={error?.message}
                onChange={onChange}
              />
            )}
          />
          <Link align="right" onClick={() => router.push("/")}>
            비밀번호를 잊으셨나요?
          </Link>
        </Stack>
        <LoadingButton
          type="submit"
          variant="contained"
          size="large"
          loading={isLoading}
          fullWidth
        >
          로그인
        </LoadingButton>
      </Stack>
    </Paper>
  );
};

export default SignInPage;
