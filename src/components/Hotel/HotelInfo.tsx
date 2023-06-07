// Material UI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Components
import Score from "../Score";

const HotelInfo = () => {
  return (
    <Box display="flex" justifyContent="space-between" marginBottom="1em">
      <Stack paddingRight="1em">
        <Typography fontWeight="bold" variant="h5">
          Hotel Norrebro
        </Typography>
        <Typography variant="subtitle2">
          3-star hotel located in the heart of Copenhagen
        </Typography>
      </Stack>

      <Score score={9.6} reviews={1920} />
    </Box>
  );
};

export default HotelInfo;
