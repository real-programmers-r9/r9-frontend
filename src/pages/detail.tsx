import * as React from "react";
import { Typography, Box, Rating } from "@mui/material";
import { FavoriteBorderOutlined } from "@mui/icons-material";

const Detail: React.FC = () => {
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
          <FavoriteBorderOutlined
            sx={{ position: "absolute", right: 30, height: "1.3em" }}
          />
        </Typography>
      </div>
    </div>
  );
};

export default Detail;

/* <div className: Ratingbar> 
        <Box align="left" component="fieldset" mb={3} borderColor="transparent">
          <Rating
            value={value}
            name="rating"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onClick={props.handleInputChange}
          />
        </Box>
      </div> */
