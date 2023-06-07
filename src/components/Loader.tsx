// Material UI
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

export default styled(CircularProgress)(({ size }) => ({
  position: "absolute",
  top: `calc(50% - ${Number(size) * 0.3}px)`,
  left: `calc(50% - ${Number(size) * 0.3}px)`,
}));
