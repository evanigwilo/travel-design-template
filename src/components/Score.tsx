// Material UI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
// Numeral Formatter
import numeral from "numeral";
// Constants & Types
import { ScoreProps } from "../types";

// score to text helper
const scoreToText = (score: number) => {
  if (score < 8) {
    return "Average";
  } else {
    return "Excellent";
  }
};

// score to color helper
const scoreToColor = (score: number) => {
  if (score < 8) {
    return {
      backgroundColor: "antiquewhite",
      color: "orange",
    };
  } else {
    return {
      backgroundColor: "rgb(144 238 144 / 50%)",
      color: "green",
    };
  }
};

const Score = (props: ScoreProps) => {
  const { score, reviews } = props;

  const { backgroundColor, color } = scoreToColor(score);

  return (
    <Box display="flex" alignItems="center">
      <Stack paddingRight="0.5em">
        <Typography
          fontWeight="bold"
          variant="subtitle2"
          color={color}
          align="right"
        >
          {scoreToText(score)}
        </Typography>
        {reviews && (
          <Typography
            variant="subtitle2"
            sx={{
              opacity: 0.5,
              display: {
                xs: "none",
                md: "unset",
              },
            }}
          >
            {`${numeral(reviews).format("0,0")} reviews`}
          </Typography>
        )}
      </Stack>
      <Chip label={score} sx={{ padding: "0.5em", backgroundColor, color }} />
    </Box>
  );
};

export default Score;
