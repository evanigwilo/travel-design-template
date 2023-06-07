// Material UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// Components
import RoomInfo from "./RoomInfo";

const RoomContainer = () => {
  return (
    <Box bgcolor={(theme) => theme.palette.grey[50]} padding="1.5em 2em">
      <Typography gutterBottom fontWeight="bold" variant="h6">
        Rooms
      </Typography>
      <RoomInfo />
    </Box>
  );
};

export default RoomContainer;
