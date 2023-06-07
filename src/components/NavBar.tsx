// React
import { Fragment } from "react";
// Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// React Router
import { Link } from "react-router-dom";

// custom styled button
const AuthButton = styled(Button)(({ size }) => ({
  size: "small",
  textTransform: "unset",
  borderRadius: "25px",
  padding: "0.3em 2.3em",
  margin: "0 0.5em",
}));

const NavBar = () => {
  // navigation links
  const navLinks = ["Properties", "Attractions", "Popular"];

  return (
    <Fragment>
      <AppBar
        position="sticky"
        elevation={1}
        color="default"
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          padding: "0.5em 2em",
        })}
      >
        <Toolbar
          disableGutters
          variant="dense"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box display="flex" alignItems="center">
            <Box paddingRight="2.5em">
              <Link to="/">
                <Typography fontWeight="bold" variant="h5">
                  Tripster
                </Typography>
              </Link>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map((link) => (
                <Typography key={link} variant="subtitle2" paddingRight="2em">
                  {link}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box>
            <AuthButton
              variant="outlined"
              sx={{ display: { xs: "none", md: "inline-block" } }}
            >
              Sign up
            </AuthButton>
            <AuthButton variant="contained">Log in</AuthButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
