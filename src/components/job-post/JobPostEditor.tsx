import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DaumPostcode from "react-daum-postcode";
import useDaumAdress from "src/hooks/kakao/useDaumAdress";
import useToggle from "src/hooks/useToggle";
import useJobForm from "src/hooks/job/useJobForm";
import { useSelector } from "react-redux";
import { selectJob } from "src/redux/slices/job-slice";

interface EditorProps {
  isEdit: boolean;
}

const JobPostEditor = ({ isEdit }: EditorProps) => {
  const job = useSelector(selectJob);
  const [isModal, onToggleModal] = useToggle();
  const [zonecode, address1, onCompletePost] = useDaumAdress();
  const {
    onChangeJobTextField,
    onChangeAdress,
    onChangeWorkingDay,
    onCreateJob,
  } = useJobForm();
  const { title, workType, payment, personnel, age } = job;

  const onCompletePostAndToggleModal = (data: any) => {
    onCompletePost(data);
    onToggleModal();
  };
  return (
    <Paper sx={{ padding: "25px" }}>
      {!isEdit ? (
        <Stack spacing={2} py={4}>
          <Typography align="center" variant="h4">
            공고 등록
          </Typography>

          <Typography align="left" variant="h6">
            제목
          </Typography>
          <TextField
            variant="outlined"
            label="공고 제목"
            name="title"
            onChange={onChangeJobTextField}
            value={title}
          />

          <Typography align="left" variant="h6">
            근무 형태 (ex. 홀서빙)
          </Typography>
          <TextField
            variant="outlined"
            label="근무 형태"
            name="workType"
            onChange={onChangeJobTextField}
            value={workType}
          />

          <Typography align="left" variant="h6">
            모집 인원
          </Typography>
          <TextField
            type="number"
            variant="outlined"
            label="모집 인원 (명)"
            name="personnel"
            onChange={onChangeJobTextField}
            value={personnel}
          />
          <Typography align="left" variant="h6">
            희망 연령대
          </Typography>
          <TextField
            type="number"
            variant="outlined"
            label="희망 연령대 (세)"
            name="age"
            onChange={onChangeJobTextField}
            value={age}
          />

          <Typography align="left" variant="h6">
            급여
          </Typography>
          <Stack direction="row" spacing={4}>
            <Select
              style={{ width: "7rem" }}
              label="급여 형태"
              name="payment"
              onChange={onChangeJobTextField}
              value={payment}
            >
              <MenuItem value="PERHOUR">시급</MenuItem>
              <MenuItem value="PERDAY">일급</MenuItem>
              <MenuItem value="PERMONTH">월급</MenuItem>
            </Select>

            <TextField
              style={{ width: "100%" }}
              variant="outlined"
              label="급여 (원)"
              name="wage"
              onChange={onChangeJobTextField}
            />
          </Stack>
          <Typography align="left" variant="h6">
            근무 요일
          </Typography>

          <FormGroup>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControlLabel
                control={
                  <Checkbox value={1} id="월" onChange={onChangeWorkingDay} />
                }
                label="월"
              />
              <FormControlLabel
                control={
                  <Checkbox value={2} id="화" onChange={onChangeWorkingDay} />
                }
                label="화"
              />
              <FormControlLabel
                control={
                  <Checkbox value={3} id="수" onChange={onChangeWorkingDay} />
                }
                label="수"
              />
              <FormControlLabel
                control={
                  <Checkbox value={4} id="목" onChange={onChangeWorkingDay} />
                }
                label="목"
              />
              <FormControlLabel
                control={
                  <Checkbox value={5} id="금" onChange={onChangeWorkingDay} />
                }
                label="금"
              />
              <FormControlLabel
                control={
                  <Checkbox value={6} id="토" onChange={onChangeWorkingDay} />
                }
                label="토"
              />
              <FormControlLabel
                control={
                  <Checkbox value={7} id="일" onChange={onChangeWorkingDay} />
                }
                label="일"
              />
            </Box>
          </FormGroup>

          <Typography align="left" variant="h6">
            근무 내용
          </Typography>

          <TextField
            multiline
            minRows={30}
            maxRows={100}
            variant="outlined"
            label="근무 내용"
            name="detail"
            onChange={onChangeJobTextField}
          />

          <Typography align="left" variant="h6">
            근무 일자
          </Typography>
          <FormGroup>
            <RadioGroup defaultValue="female" name="radio-buttons-group">
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <FormControlLabel
                  control={<Radio />}
                  label="하루(1~2일)"
                  value={"female"}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="1주일 이하"
                  value={"female1"}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="1주일~1개월"
                  value={"female2"}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="1개월~3개월"
                  value={"female3"}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="3개월~6개월"
                  value={"female4"}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="6개월~1년"
                  value={"female5"}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="1년이상"
                  value={"female6"}
                />
              </Box>
            </RadioGroup>
          </FormGroup>

          <Typography align="left" variant="h6">
            근무 시간
          </Typography>

          <Stack direction="row" spacing={4}>
            <TextField
              id="time"
              label="시작 시간"
              type="time"
              defaultValue="07:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 150 }}
              name="startTime"
              onChange={onChangeJobTextField}
            />
            <Typography align="left" variant="h6">
              ~
            </Typography>
            <TextField
              label="종료 시간"
              type="time"
              defaultValue="07:30"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 150 }}
              name="endTime"
              onChange={onChangeJobTextField}
            />
          </Stack>

          <Typography align="left" variant="h6">
            근무 주소
          </Typography>
          <Modal
            open={isModal}
            onClose={onToggleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <DaumPostcode onComplete={onCompletePostAndToggleModal} />
            </Box>
          </Modal>
          <Stack direction="row" spacing={4}>
            <TextField variant="outlined" label="우편 주소" value={zonecode} />
            <Button onClick={onToggleModal}>우편번호 찾기</Button>
          </Stack>
          <TextField
            variant="outlined"
            label="주소"
            name="adress1"
            value={address1}
          />
          <TextField
            variant="outlined"
            label="상세 주소"
            name="adress2"
            onChange={(e) => {
              onChangeAdress(address1, e);
            }}
          />
          <Typography align="left" variant="h6">
            모집마감일
          </Typography>
          <TextField
            id="date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            name="deadline"
            onChange={onChangeJobTextField}
          />
          <Button variant="contained" onClick={onCreateJob}>
            작성
          </Button>
        </Stack>
      ) : null}
    </Paper>
  );
};

export default JobPostEditor;
