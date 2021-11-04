import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Paper, Stack, Typography, TextField, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGEXP_PASSWORD } from "../constants/regexp";
import { useLoginMutation } from "../redux/services/r9-api";
import { SignInForm } from "../types/forms";

const SignInPage: NextPage = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm<SignInForm>({
    resolver: yupResolver(
      yup.object().shape({
        email: yup
          .string()
          .email("이메일 형식으로 입력해주세요!")
          .required("이메일을 입력해주세요!"),
        password: yup
          .string()
          .matches(
            REGEXP_PASSWORD,
            "비밀번호는 영문 대소문자, 숫자, 특수문자를 모두 포함하여 8글자 이상이여야합니다!"
          )
          .required("비밀번호를 입력해주세요!"),
      })
    ),
  });

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = handleSubmit(async (value) => {
    if (isLoading) {
      return;
    }
    await login(value);
    router.push("/");
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
      <Stack
        spacing={{
          xs: 2,
          sm: 3,
        }}
      >
        <Typography variant="h5" align="center">
          로그인
        </Typography>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              type="email"
              label="이메일 (Email)"
              variant="standard"
              fullWidth
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
              label="비밀번호 (Password)"
              variant="standard"
              fullWidth
              value={value || ""}
              error={!!error}
              helperText={error?.message}
              onChange={onChange}
            />
          )}
        />
        <LoadingButton
          type="submit"
          variant="contained"
          fullWidth
          loading={isLoading}
        >
          로그인
        </LoadingButton>
        <Button size="small" fullWidth>
          비밀번호를 잊으셨나요?
        </Button>
      </Stack>
    </Paper>
  );
};

export default SignInPage;
