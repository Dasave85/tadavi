import { Grid } from "@mui/material";

import { TextCarousel } from "../../styles/Text/TextCarousel";

export const Item = ({ item }) => {
  return (
    <Grid
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "inline-block",
        textAlign: "center",
      }}
    >
      <Grid>
        <img
          src={item.src}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>

      <TextCarousel>{item.textImg}</TextCarousel>
    </Grid>
  );
};
