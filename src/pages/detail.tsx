import React from "react";
import { Typography, Box, Rating } from "@mui/material";
import { FavoriteBorderRounded } from "@mui/icons-material";

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
          <FavoriteBorderRounded
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

export default Detail;
