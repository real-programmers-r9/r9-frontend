import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DaumPostcode from "react-daum-postcode";
import { useToggle } from "~/hooks/useToggle";
import { selectAuth } from "~/redux/slices/auth-slice";
import { Tag } from "./auth/signupdetail";

const areas = ["#지역 1", "#지역 2", "#지역 3"];
const advantages = ["#회계 가능", "#운전 가능", "#빠른 계산 가능"];
const workingTimes = ["#주 3회", "#주간", "#평일"];

const MyInfoPage: NextPage = () => {
  const router = useRouter();
  const { user } = useSelector(selectAuth);
  const [isModal, toggleModal] = useToggle();
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      email: user?.email,
      phone: "",
      address: {
        postalCode: user?.address.postalCode,
        state: user?.address.state,
        city: user?.address.city,
        roadAddress: user?.address.roadAddress,
      },
    },
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required(),
        phone: yup.string().required(),
        address: yup.object().shape({
          postalCode: yup.string().required(),
          state: yup.string().required(),
          city: yup.string().required(),
          roadAddress: yup.string().required(),
        }),
      })
    ),
  });

  useEffect(() => {
    if (!user) {
      router.push("/auth/signin");
    }
  }, [router, user]);

  const onSubmit = handleSubmit((value) => {
    console.log(value);
  });

  return (
    <>
      <Paper sx={{ padding: 2 }}>
        <Stack spacing={4}>
          <Typography variant="h6">회원정보</Typography>
          <Stack direction="row" spacing={2}>
            <Avatar src={user?.profileImage} sx={{ width: 64, height: 64 }} />
            <Stack>
              <Typography>{user?.name}</Typography>
              <Typography variant="body2">{user?.gender}</Typography>
              <Typography variant="body2">{user?.dateOfBirth}</Typography>
            </Stack>
          </Stack>
          <Stack onSubmit={onSubmit} spacing={3} component="form">
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
              name="phone"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="text"
                  label="전화번호"
                  fullWidth
                  size="small"
                  value={value || ""}
                  error={!!error}
                  helperText={error?.message}
                  onChange={onChange}
                />
              )}
            />
            <Stack spacing={2}>
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
            </Stack>
            <Box display="flex" justifyContent="flex-end">
              <Button type="submit" variant="contained">
                수정
              </Button>
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography>근무 가능 지역</Typography>
              <Grid container>
                {areas.map((item) => (
                  <Grid key={item} item xs={4} p={0.25}>
                    <Tag label={item} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack spacing={1}>
              <Typography>나의 장점</Typography>
              <Grid container>
                {advantages.map((item) => (
                  <Grid key={item} item xs={4} p={0.25}>
                    <Tag label={item} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack spacing={1}>
              <Typography>선호 근무시간</Typography>
              <Grid container>
                {workingTimes.map((item) => (
                  <Grid key={item} item xs={4} p={0.25}>
                    <Tag label={item} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <TextField type="text" label="추가 정보" fullWidth multiline />
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

export default MyInfoPage;
