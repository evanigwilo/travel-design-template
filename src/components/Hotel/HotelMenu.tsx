// React
import { SyntheticEvent, useState } from "react";
// Material UI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
// Components
import IconText from "../IconText";
import TabPanel from "../TabPanel";
// Mock Data
import { hotelFeatures } from "../../sample-data";

// tab menu min height
const minHeight = "32px";

const StyledTab = styled(Tab)(() => ({
  minHeight,
  textTransform: "unset",
  cursor: "pointer",
}));

const HotelMenu = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: SyntheticEvent, index: number) => {
    setTabIndex(index);
  };

  return (
    <Box marginBottom="1em">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabIndex} onChange={handleTabChange} sx={{ minHeight }}>
          <StyledTab label="Overview" />
          <StyledTab label="Rooms" />
          <StyledTab label="Amenities" />
          <StyledTab label="Policies" />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <Box
          display="flex"
          justifyContent="space-between"
          height="100%"
          flexDirection={{
            xs: "column",
            md: "row",
          }}
        >
          <Grid
            container
            flex={{
              lg: 0.5,
              md: 0.7,
              xs: "unset",
            }}
            spacing={1}
            paddingBottom={{
              xs: "2em",
              md: "0",
            }}
          >
            <Grid item xs={12}>
              <Typography fontWeight="bold" variant="h6">
                Property overview
              </Typography>
            </Grid>
            {hotelFeatures.map(({ icon, text }) => (
              <Grid item key={text} xs={6}>
                <IconText icon={icon} text={text} />
              </Grid>
            ))}
          </Grid>
          <img
            style={{ height: "100%", borderRadius: "25px" }}
            src={`${process.env.PUBLIC_URL}/assets/images/map_vector.jpg`}
          />
        </Box>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        Rooms Tab
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        Amenities Tab
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        Policies Tab
      </TabPanel>
    </Box>
  );
};

export default HotelMenu;
