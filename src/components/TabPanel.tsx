// Material UI
import Box from "@mui/material/Box";
// Constants & Types
import { TabPanelProps } from "../types";

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          paddingTop="2em"
          maxHeight={{
            xs: "unset",
            md: "300px",
          }}
          height={{
            xs: "unset",
            md: "25vh",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
