import React from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Modal,
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

const JobPostEditor = () => {
  const [isModal, onToggleModal] = useToggle();
  const [address, addressDetail, onCompletePost] = useDaumAdress();

  return (
    <div>
      <Stack spacing={2} py={4}>
        <Typography align="center" variant="h4">
          공고 등록
        </Typography>

        <Typography align="left" variant="h6">
          제목
        </Typography>
        <TextField variant="outlined" label="공고 제목" name="title" />

        <Typography align="left" variant="h6">
          근무 형태 (ex. 홀서빙)
        </Typography>
        <TextField variant="outlined" label="근무 형태" name="dfg" />
        <Typography align="left" variant="h6">
          급여
        </Typography>
        <Stack direction="row" spacing={4}>
          <Select style={{ width: "7rem" }} label="Asd">
            <MenuItem value="PERHOUR">시급</MenuItem>
            <MenuItem value="PERDAY">일급</MenuItem>
            <MenuItem value="PERMONTH">월급</MenuItem>
          </Select>
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            label="급여 (원)"
            name="dfgg"
          />
        </Stack>
        <Typography align="left" variant="h6">
          근무 요일
        </Typography>

        <FormGroup>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="월"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="화"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="수"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="목"
            />

            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="금"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="토"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
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
          name="title"
        />

        <Typography align="left" variant="h6">
          근무 일자
        </Typography>
        <FormGroup>
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <FormControlLabel control={<Radio />} label="하루(1~2일)" />
              <FormControlLabel control={<Radio />} label="1주일 이하" />
              <FormControlLabel control={<Radio />} label="1주일~1개월" />
              <FormControlLabel control={<Radio />} label="1개월~3개월" />
              <FormControlLabel control={<Radio />} label="3개월~6개월" />
              <FormControlLabel control={<Radio />} label="6개월~1년" />
              <FormControlLabel control={<Radio />} label="1년이상" />
            </Box>
          </RadioGroup>
        </FormGroup>

        <Typography align="left" variant="h6">
          근무 시간
        </Typography>
        <Stack direction="row" spacing={4}>
          <TextField
            id="time"
            label="Alarm clock"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            sx={{ width: 150 }}
          />
          <Typography align="left" variant="h6">
            ~
          </Typography>
          <TextField
            id="time"
            label="Alarm clock"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            sx={{ width: 150 }}
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
            <DaumPostcode onComplete={onCompletePost} />
          </Box>
        </Modal>
        <Stack direction="row" spacing={4}>
          <TextField
            variant="outlined"
            label="우편 주소"
            name="title"
            value={address}
          />
          <Button onClick={onToggleModal}>우편번호 찾기</Button>
        </Stack>
        <TextField
          variant="outlined"
          label="주소"
          name="title"
          value={addressDetail}
        />
        <TextField variant="outlined" label="상세 주소" name="title" />
      </Stack>
      <Typography align="left" variant="h6">
        모집마감
      </Typography>
      <TextField
        id="date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export default JobPostEditor;
