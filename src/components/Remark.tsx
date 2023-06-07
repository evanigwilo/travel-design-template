// Material UI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Remark = ({ text }: { text: string }) => {
  // positive or negative remark check
  const positive = text.startsWith("+");

  return (
    <Box display="flex">
      <Typography
        variant="subtitle2"
        color={({ palette }) =>
          positive ? palette.success.light : palette.error.light
        }
        paddingRight="0.5em"
      >
        {text.charAt(0)}
      </Typography>
      <Typography gutterBottom variant="subtitle2">
        {text.substring(1)}
      </Typography>
    </Box>
  );
};

export default Remark;
