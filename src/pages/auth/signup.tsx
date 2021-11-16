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
  FormHelperText,
} from "@mui/material";
import { MobileDatePicker, LoadingButton } from "@mui/lab";
import DaumPostcode from "react-daum-postcode";
import { useSnackbar } from "notistack";
import { Controller } from "react-hook-form";
import { useToggle } from "~/hooks/useToggle";
import { usePostUserMutation } from "~/redux/services/api";
import { Gender, Role } from "~/types/user";
import { useSignUpForm } from "~/hooks/forms/useSignUpForm";

const SignUpPage: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [isModal, toggleModal] = useToggle();

  const { handleSubmit, control, setValue } = useSignUpForm();

  const [postUserMutation, { isLoading }] = usePostUserMutation();

  const onSubmit = handleSubmit(async (data) => {
    if (isLoading) {
      return;
    }

    await postUserMutation(data)
      .unwrap()
      .then(() => {
        router.push("/auth/signin");
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

          <Stack spacing={2}>
            <Typography variant="h6">가입 정보</Typography>
            <Controller
              control={control}
              name="role"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl size="small" fullWidth>
                  <InputLabel id="role">사용자 유형</InputLabel>
                  <Select
                    labelId="role"
                    value={value || ""}
                    label="사용자 유형"
                    error={!!error}
                    onChange={onChange}
                  >
                    <MenuItem value={Role.USER}>일반 사용자</MenuItem>
                    <MenuItem value={Role.BUSINESS}>기업 사용자</MenuItem>
                  </Select>
                  <FormHelperText error>{error?.message}</FormHelperText>
                </FormControl>
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
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
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
                  size="small"
                  value={value || ""}
                  error={!!error}
                  helperText={error?.message}
                  onChange={onChange}
                />
              )}
            />
          </Stack>

          <Stack spacing={2}>
            <Typography variant="h6">개인 정보</Typography>
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
              name="gender"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl size="small" fullWidth>
                  <InputLabel id="gender">성별</InputLabel>
                  <Select
                    labelId="gender"
                    value={value || ""}
                    label="성별"
                    error={!!error}
                    onChange={onChange}
                  >
                    <MenuItem value={Gender.MALE}>남성</MenuItem>
                    <MenuItem value={Gender.FEMALE}>여성</MenuItem>
                    <MenuItem value={Gender.OTHER}>기타</MenuItem>
                  </Select>
                  <FormHelperText error>{error?.message}</FormHelperText>
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="dateOfBirth"
              render={({ field: { onChange, value } }) => (
                <MobileDatePicker
                  label="생년월일"
                  mask="____.__.__"
                  inputFormat="yyyy.MM.DD"
                  toolbarFormat="yyyy.MM.DD"
                  okText="확인"
                  cancelText="취소"
                  value={value}
                  onChange={onChange}
                  renderInput={(params) => (
                    <TextField size="small" {...params} />
                  )}
                />
              )}
            />
            <Stack direction="row" spacing={1}>
              <Controller
                control={control}
                name="address.postalCode"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    type="text"
                    label="우편 번호"
                    fullWidth
                    size="small"
                    value={value || ""}
                    error={!!error}
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
              name="address.roadAddress"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="text"
                  label="상세 주소"
                  fullWidth
                  size="small"
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
              setValue("address.postalCode", data.zonecode);
              setValue("address.state", data.sido);
              setValue("address.city", data.sigungu);
              setValue("address.roadAddress", data.roadAddress);
              toggleModal();
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default SignUpPage;
