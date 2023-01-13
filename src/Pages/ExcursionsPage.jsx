import { Grid } from "@mui/material";
import { TextCarousel } from "../styles/Text/TextCarousel";
import construction from "../assets/travelConstruction.webp";

export const ExcursionsPage = () => {
  return (
    <Grid container mt={10}>
      <Grid
        sx={{
          width: "100vw",
          height: "auto",
          position: "relative",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        <Grid
          item
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <img src={construction} width="70%" alt="plane" />
        </Grid>
        <TextCarousel>Properament més excursions</TextCarousel>
      </Grid>
    </Grid>
  );
};
