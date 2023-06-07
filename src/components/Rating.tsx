// React
import { Fragment } from "react";
// Material UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
// Constants & Types
import { RatingProps } from "../types";

// custom styled progressbar
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}));

const Rating = (props: RatingProps) => {
  const { name, rate } = props;

  return (
    <Fragment>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="caption" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="caption" sx={{ opacity: 0.5 }}>
          {`${rate}/10`}
        </Typography>
      </Box>
      <BorderLinearProgress variant="determinate" value={rate * 10} />
      <br />
    </Fragment>
  );
};

export default Rating;
