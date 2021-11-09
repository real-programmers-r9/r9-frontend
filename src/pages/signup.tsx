import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Button,
  Paper,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Modal,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DaumPostcode from "react-daum-postcode";
import useToggle from "src/hooks/useToggle";
import { usePostSignUpMutation } from "src/redux/services/api";
import { REGEXP_PASSWORD } from "../constants/regexp";
import { SignUpForm } from "../types/forms";

const SignUpPage: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [isModal, toggleModal] = useToggle();
  const { handleSubmit, control, setValue } = useForm<SignUpForm>({
    defaultValues: {
      role: "USER",
    },
    resolver: yupResolver(
      yup.object().shape({
        role: yup.string().required("사용자 유형을 선택해주세요!"),
        name: yup
          .string()
          .max(10, "이름은 최대 10자 이하여야합니다.")
          .required("이름을 입력해주세요!"),
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
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다!")
          .required("비밀번호 재입력을 입력해주세요!"),
        zip: yup.string().required("우편 번호를 입력해주세요!"),
        address: yup.string().required("주소를 입력해주세요!"),
      })
    ),
  });

  const [postSignUp, { isLoading }] = usePostSignUpMutation();

  const onSubmit = handleSubmit(async (value) => {
    if (isLoading) {
      return;
    }
    await postSignUp(value)
      .unwrap()
      .then(() => {
        router.push("/");
      })
      .catch(() => {
        enqueueSnackbar("error", { variant: "error" });
      });
  });

  return (
    <>
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
            회원가입
          </Typography>
          <Controller
            control={control}
            name="role"
            render={({ field: { onChange, value } }) => (
              <FormControl fullWidth>
                <InputLabel id="role">사용자 유형</InputLabel>
                <Select
                  labelId="role"
                  value={value}
                  label="사용자 유형"
                  onChange={onChange}
                >
                  <MenuItem value="USER">일반 사용자</MenuItem>
                  <MenuItem value="BUSINESS">기업 사용자</MenuItem>
                </Select>
              </FormControl>
            )}
          />

          <Stack spacing={2}>
            <Controller
              control={control}
              name="name"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="text"
                  label="이름"
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
              name="email"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
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
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
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
            <Controller
              control={control}
              name="confirmPassword"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="password"
                  label="비밀번호 재확인"
                  fullWidth
                  value={value || ""}
                  error={!!error}
                  helperText={error?.message}
                  onChange={onChange}
                />
              )}
            />
          </Stack>

          <Stack spacing={2}>
            <Stack direction="row" spacing={1}>
              <Controller
                control={control}
                name="zip"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    type="text"
                    label="우편 번호"
                    fullWidth
                    value={value || ""}
                    error={!!error}
                    helperText={error?.message}
                    onChange={onChange}
                    disabled
                  />
                )}
              />
              <Button
                variant="outlined"
                onClick={toggleModal}
                sx={{ minWidth: "30%" }}
              >
                주소 검색
              </Button>
            </Stack>
            <Controller
              control={control}
              name="address"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="text"
                  label="상세 주소"
                  fullWidth
                  value={value || ""}
                  error={!!error}
                  helperText={error?.message}
                  onChange={onChange}
                  disabled
                />
              )}
            />
          </Stack>

          <LoadingButton
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            loading={isLoading}
          >
            회원가입
          </LoadingButton>
        </Stack>
      </Paper>

      <Modal open={isModal} onClose={toggleModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "95%",
          }}
        >
          <DaumPostcode
            onComplete={(data) => {
              setValue("zip", data.zonecode);
              setValue("address", data.roadAddress);
              toggleModal();
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default SignUpPage;
