import React from "react";
import { NextPage } from "next";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MobileDatePicker } from "@mui/lab";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import { Controller } from "react-hook-form";
import DaumPostcode from "react-daum-postcode";
import { useToggle } from "~/hooks/useToggle";
// import { wrapper } from "~/redux/store";
import { useEditProfileForm } from "~/hooks/forms/useEditProfileForm";
import { Gender, Role, User } from "~/types/user";
import {
  usePatchUserMeMutation,
  usePostUploadMutation,
} from "~/redux/services/api";
import { selectAuth } from "~/redux/slices/auth-slice";

export interface MyInfoPageProps {
  user: User;
}

const MyInfoPage: NextPage = (/* { user } */) => {
  const { user } = useSelector(selectAuth) as any;
  const { enqueueSnackbar } = useSnackbar();
  const [isModal, toggleModal] = useToggle();
  const { handleSubmit, control, setValue, register } = useEditProfileForm({
    defaultValues: {
      role: user.role,
      name: user.name,
      email: user.email,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      address: {
        postalCode: user.address.postalCode,
        state: user.address.state,
        city: user.address.city,
        roadAddress: user.address.roadAddress,
      },
    },
  });
  const [patchUserMeMutation, { isLoading }] = usePatchUserMeMutation();
  const [postUploadMutatuin] = usePostUploadMutation();

  const onSubmit = handleSubmit(async (data) => {
    if (isLoading) {
      return;
    }

    if (data.profileImage instanceof FileList) {
      const formBody = new FormData();
      formBody.append("file", data.profileImage[0]);
      await postUploadMutatuin(formBody)
        .unwrap()
        .then((res) => {
          data.profileImage = res.Location;
        });
    }

    patchUserMeMutation({ data })
      .unwrap()
      .then(() => {
        enqueueSnackbar("내 정보가 변경되었습니다.", {
          variant: "info",
        });
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
        <Stack spacing={2}>
          <Typography variant="h5" align="center">
            내 정보
          </Typography>
          <Stack spacing={2} component="form" onSubmit={onSubmit}>
            <Typography variant="h6">계정 정보</Typography>
            <Controller
              control={control}
              name="role"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl size="small" fullWidth disabled>
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
                  disabled
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
            <Stack spacing={1}>
              <Typography>프로필 이미지</Typography>
              <input
                {...register("profileImage")}
                accept="image/*"
                type="file"
              />
            </Stack>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                수정
              </Button>
            </Box>
          </Stack>

          <Stack spacing={2} component="form">
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
                  disabled
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
                <FormControl size="small" fullWidth disabled>
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
                  disabled
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
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                수정
              </Button>
            </Box>
          </Stack>
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

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const { user } = store.getState().auth;

//     if (!user) {
//       return {
//         redirect: {
//           permanent: false,
//           destination: "/auth/signin",
//         },
//       };
//     }

//     return {
//       props: { user },
//     };
//   }
// );

export default MyInfoPage;
