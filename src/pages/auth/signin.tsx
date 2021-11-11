import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Paper, Stack, Typography, TextField, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSignInMutation } from "~/redux/services/api";
import { REGEXP_PASSWORD } from "~/constants/regexp";
import { SignInForm } from "~/types/forms";

const SignInPage: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
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

  const [signInMutation, { isLoading }] = useSignInMutation();

  const onSubmit = handleSubmit(async (value) => {
    if (isLoading) {
      return;
    }

    await signInMutation(value)
      .unwrap()
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        enqueueSnackbar(error.message || "예기치 못한 에러가 발생했습니다.", {
          variant: "error",
        });
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
