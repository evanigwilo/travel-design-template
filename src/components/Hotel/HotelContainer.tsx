// Material UI
import Box from "@mui/material/Box";
// Components
import HotelImages from "./HotelImages";
import HotelInfo from "./HotelInfo";
import HotelMenu from "./HotelMenu";

const HotelContainer = () => {
  return (
    <Box padding="1.5em 2em">
      <HotelImages />
      <HotelInfo />
      <HotelMenu />
    </Box>
  );
};

export default HotelContainer;
