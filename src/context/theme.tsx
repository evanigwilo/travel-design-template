// React
import { useMemo } from "react";
// Material UI
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Constants & Types
import { themeShadows } from "../utils/constants";
import { ChildrenNode } from "../types";

const Provider = ({ children }: ChildrenNode) => {
  // create custom theme
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              "*": {
                boxSizing: "border-box",
              },
              html: {
                MozOsxFontSmoothing: "grayscale",
                WebkitFontSmoothing: "antialiased",
                height: "100%",
                width: "100%",
              },
              body: {
                height: "100%",
              },
              a: {
                textDecoration: "none",
                color: "inherit",
              },
              "#root": {
                height: "100%",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                cursor: "pointer",
              },
            },
          },
        },
        shadows: themeShadows,
        typography: {
          fontSize: 14,
          allVariants: {
            color: "rgba(0, 0, 0, 0.8)",
            cursor: "inherit",
          },
          fontWeightRegular: "550",
          fontWeightMedium: "600",
          fontFamily: ["Titillium Web", "sans-serif"].join(","),
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
