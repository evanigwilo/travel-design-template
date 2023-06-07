// Material UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
// Components
import Remark from "../Remark";
import Score from "../Score";
// Constants & Types
import { ReviewProps } from "../../types";

const ReviewFeedback = (props: ReviewProps) => {
  const { reviews } = props;

  return (
    <Stack width="100%">
      {reviews.map((review, index) => (
        <Stack
          key={index}
          width="100%"
          height="100%"
          padding="0.8em 0"
          spacing={3}
        >
          <Box
            flexGrow={1}
            display="flex"
            height="100%"
            justifyContent="space-between"
          >
            <Box>
              <Typography gutterBottom fontWeight="bold" variant="body1">
                {review.title}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                sx={{ opacity: 0.5 }}
              >
                {review.user}
              </Typography>
              <Typography variant="subtitle1">{review.message}</Typography>
              <br />
              {review.points.map((point) => (
                <Remark key={point} text={point} />
              ))}
            </Box>
            <Stack justifyContent="space-between" paddingLeft="1em">
              <Score score={review.score} />
              <Box textAlign="end">
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  sx={{ opacity: 0.5 }}
                >
                  Reviewed on
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  sx={{ opacity: 0.5, whiteSpace: "nowrap" }}
                >
                  {/* 20 September 2022 */}
                  {new Date(review.date).toLocaleDateString("en-GB", {
                    month: "long",
                    year: "numeric",
                    day: "numeric",
                  })}
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Divider />
        </Stack>
      ))}
    </Stack>
  );
};

export default ReviewFeedback;
