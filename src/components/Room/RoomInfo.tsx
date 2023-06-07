// React
import { SyntheticEvent, useState } from "react";
// Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// Components
import IconText from "../IconText";
import Loader from "../Loader";
// Mock Data
import { rooms } from "../../sample-data";

const RoomInfo = () => {
  const [loaded, setLoaded] = useState(
    Array.from(Array(rooms.length)).map(() => false)
  );

  const handleImageLoad = (index: number) => (event: SyntheticEvent) => {
    setLoaded((prev) => {
      const curr = [...prev];
      curr[index] = true;
      return curr;
    });
  };

  return (
    <Grid container spacing={2}>
      {rooms.map((room, index) => (
        <Grid item key={index} width="100%" height="100%" lg={3} md={4} sm={12}>
          <Card
            sx={{
              maxWidth: 400,
              width: "100%",
              borderRadius: "25px",
              padding: "0.5em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: "auto",
            }}
          >
            <Box>
              <Box position="relative">
                <CardMedia
                  sx={{
                    borderRadius: "25px",
                    filter: loaded[index] ? "unset" : "blur(3px) opacity(0.7)",
                  }}
                  component="img"
                  height="120"
                  image={`${process.env.PUBLIC_URL}/assets/images/rooms/${room.image}.jpg`}
                  alt={room.group}
                  onLoad={handleImageLoad(index)}
                />

                {!loaded[index] && <Loader size={40} />}
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {room.group}
                </Typography>
                <IconText
                  icon="dashboard"
                  text={`${room.sqm} sqm`}
                  fontSize={12}
                />
                <IconText
                  icon="groups"
                  text={`${room.people} people`}
                  fontSize={12}
                />
                <IconText icon="hotel" text={room.bed} fontSize={12} />
                <Typography
                  paddingTop="0.5em"
                  variant="subtitle2"
                  sx={{ opacity: 0.5 }}
                >
                  Non-refundable. Breakfast included
                </Typography>
              </CardContent>
            </Box>

            <Button
              size="small"
              variant="contained"
              sx={{
                padding: "0.5em 0",
                textTransform: "unset",
                borderRadius: "25px",
                width: "100%",
              }}
            >
              {`Book now for $${room.price}`}
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RoomInfo;
