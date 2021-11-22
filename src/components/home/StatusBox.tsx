import React from "react";
import { Box, styled } from "@mui/system";
import { JobStatus } from "~/types/enums";

interface IStatusProps {
  status: JobStatus | undefined;
}

const ActivateBox = styled(Box)({
  borderRadius: "10px",
  border: "1px solid",
  backgroundColor: "#35d34ab9",
  width: "5rem",
  color: "whitesmoke",
});

const InActivateBox = styled(ActivateBox)({
  backgroundColor: "#dc3545",
});

const StopBox = styled(ActivateBox)({
  backgroundColor: "#ffc107",
  color: "#212529",
});

const StatusBox = ({ status }: IStatusProps) => {
  return (
    <div>
      <Box>
        {status === JobStatus.ACTIVATE ? (
          <ActivateBox>모집중</ActivateBox>
        ) : status === JobStatus.INACTIVATE ? (
          <InActivateBox>모집 마감</InActivateBox>
        ) : (
          <StopBox>게시 정지</StopBox>
        )}
      </Box>
    </div>
  );
};

export default StatusBox;
