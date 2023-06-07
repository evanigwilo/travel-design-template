// Material UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
// Constants & Types
import { IconTextProps } from "../types";

const IconText = (props: IconTextProps) => {
  const { icon, text, fontSize } = props;

  return (
    <Box display="flex" alignItems="center">
      <Icon sx={{ fontSize }} fontSize="small">
        {icon}
      </Icon>
      <Typography variant="subtitle2" paddingLeft="0.5em" fontSize={fontSize}>
        {text}
      </Typography>
    </Box>
  );
};

export default IconText;
