import * as React from "react";
import { Typography, Box, Rating } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { api } from "src/redux/services/api";
import { wrapper } from "src/redux/store";

const Detail = () => {
  return (
    <div>
      <div className="TitleBar">
        <br />
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          textAlign="center"
          fontWeight="bold"
        >
          강남역 도야짬뽕 홀서빙
          <FavoriteBorderRoundedIcon
            sx={{ position: "absolute", right: 30, height: "1.3em" }}
          />
        </Typography>
      </div>
      <Box
        className="RatingBar"
        sx={{
          "& > legend": { mt: 2 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography component="legend" />
        <Rating name="read-only" readOnly />
        <span>4.12(12)</span>
      </Box>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    if (context.req.headers.cookie) {
      store.dispatch(
        api.endpoints.getMyInfo.initiate(context.req.headers.cookie || "")
      );
      await Promise.all(api.util.getRunningOperationPromises());
    }
    return {
      props: {},
    };
  }
);

export default Detail;
