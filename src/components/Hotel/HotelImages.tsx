// React
import { SyntheticEvent, useEffect, useState } from "react";
// Material UI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Icon from "@mui/material/Icon";
import { styled } from "@mui/material/styles";
// Components
import Loader from "../Loader";
// Constants & Types
import { ImageProps } from "../../types";

// image url helper
const imageSrc = (index: number) =>
  `${process.env.PUBLIC_URL}/assets/images/hotels/${index}.jpg`;

// custom styled Box component for image display
const Image = styled(Box)<ImageProps>(({ theme, isStatic, loaded }) => ({
  /*
    backgroundImage: `url(assets/images/hotels/${imageIndex}.jpg)`,
    backgroundClip: "content-box",
    backgroundSize: "cover",
    padding: "1em",
  */
  filter: loaded ? "unset" : "blur(3px) opacity(0.7)",
  objectFit: isStatic ? "fill" : "cover",
  width: "100%",
  height: "20vh",
  borderRadius: "25px",
  transition: "transform ease 0.2s",
  ...(!isStatic && {
    cursor: "pointer",
    "&:hover": {
      transform: " scale(1.03)",
      border: `4px solid ${theme.palette.primary.main}`,
      objectFit: "fill",
    },
    "&:active": {
      transform: " scale(0.97)",
    },
  }),
}));

Image.defaultProps = {
  component: "img",
};

const HotelImages = () => {
  const imageCount = 4;
  const [selected, setSelected] = useState(1);
  const [grow, setGrow] = useState(false);
  const [loaded, setLoaded] = useState(
    Array.from(Array(imageCount)).map(() => false)
  );

  const handleImageLoad = (index: number) => (event: SyntheticEvent) => {
    setLoaded((prev) => {
      const curr = [...prev];
      curr[index] = true;
      return curr;
    });
  };

  useEffect(() => {
    // enable image transition on page load
    setGrow(true);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Icon
        sx={{
          fontWeight: "bold",
          marginBottom: "1em",
          cursor: "pointer",
        }}
      >
        arrow_back
      </Icon>
      <Grid container spacing={2} marginBottom="2em">
        <Grid item xs={12} md={6} position="relative">
          <Grow in={grow}>
            <Image
              isStatic={true}
              src={imageSrc(selected)}
              loaded={loaded[selected]}
              onLoad={handleImageLoad(selected)}
              sx={{
                height: {
                  xs: "40vh",
                  md: "calc(40vh + 1.5em)",
                },
              }}
            />
          </Grow>

          {!loaded[selected] && <Loader size={80} />}
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {Array.from(Array(imageCount)).map((_, index) => {
              const imageIndex = index + 2;
              return (
                <Grid item key={index} xs={6} position="relative">
                  <Grow in={grow} timeout={imageIndex * 200}>
                    <Box>
                      <Image
                        src={imageSrc(imageIndex)}
                        loaded={loaded[imageIndex]}
                        onLoad={handleImageLoad(imageIndex)}
                        onMouseEnter={() => setSelected(imageIndex)}
                        onMouseLeave={() => setSelected(1)}
                      />
                    </Box>
                  </Grow>

                  {!loaded[imageIndex] && <Loader size={40} />}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotelImages;
