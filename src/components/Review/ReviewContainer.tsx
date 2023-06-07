// Material UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// Components
import ReviewRating from "./ReviewRating";
import ReviewFeedback from "./ReviewFeedback";
// Mock Data
import { reviews } from "../../sample-data";

const ReviewContainer = () => {
  return (
    <Box padding="1.5em 2em">
      <Typography fontWeight="bold" variant="h6">
        Reviews
      </Typography>
      <Grid container>
        <Grid item xs={12} md={4} lg={3}>
          <ReviewRating />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          paddingLeft={{
            md: "4em",
            xs: "unset",
          }}
        >
          <ReviewFeedback reviews={reviews} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewContainer;
