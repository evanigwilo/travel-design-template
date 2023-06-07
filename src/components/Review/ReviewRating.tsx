// Material UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// Components
import Rating from "../Rating";
// Mock Data
import { ratings } from "../../sample-data";

// calculate average for ratings data
const sum = ratings.reduce((a, b) => a + b.rate, 0);
let average = sum / ratings.length;
average = Math.round(average * 10) / 10;

const ReviewRating = () => {
  return (
    <Box>
      <br />
      <Typography variant="h4" color={(theme) => theme.palette.primary.main}>
        {`${average}/10`}
      </Typography>
      <br />
      {ratings.map((rating) => (
        <Rating key={rating.name} name={rating.name} rate={rating.rate} />
      ))}
    </Box>
  );
};

export default ReviewRating;
