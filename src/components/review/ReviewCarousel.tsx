import { Link, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import useReviewEffect from "~/hooks/reviews/useReviewsEffect";

function ReviewCarousel(props: any) {
  const { reviews } = useReviewEffect(props.id);
  return (
    <Carousel animation="slide" duration={700}>
      {reviews.map((review: any) => (
        <Paper
          key={review.id}
          sx={{
            border: "1px solid rgb(192,192,192)",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0px 8px",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: 17 }}
              component="div"
            >
              <Link
                href={`/jobs/reviews/${review.id}`}
                color="inherit"
                underline="none"
              >
                {review.title}
              </Link>
            </Typography>
            <Typography gutterBottom sx={{ fontSize: 15 }} component="div">
              {review.content}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography gutterBottom component="div">
              리뷰 3개
            </Typography>
            <Rating
              name="text-feedback"
              value={review.rating}
              readOnly
              size="small"
            />
          </Box>
        </Paper>
      ))}
    </Carousel>
  );
}
export default ReviewCarousel;
