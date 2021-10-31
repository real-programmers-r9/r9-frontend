import {
  Button,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import useModal from "src/hooks/common/useModal";

const PostEditor = () => {
  const { isModal, onToggleModal } = useModal();

  const [address, setAddress] = useState(""); // 주소
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소

  const onCompletePost = (data: any) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
  };
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
          근무 내용
        </Typography>
        <Box
          sx={{
            width: "100%",
            minHeight: "500px",
            border: "1px solid gray",
            borderRadius: "10px",
          }}
        >
          상세내용
        </Box>
        <Typography align="left" variant="h6">
          근무 일자
        </Typography>
        <Stack direction="row" spacing={4}>
          <TextField
            id="date"
            label="근무 시작"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Typography variant="h5">~</Typography>
          <TextField
            id="date"
            label="근무 종료"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
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
              // display: "flex",
              // alignItems : "center",
              // width: "80%",
              // margin: "0 auto",
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
    </div>
  );
};

export default PostEditor;
