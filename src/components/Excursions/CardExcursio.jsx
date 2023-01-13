import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { TextPrimary } from "../../styles/Text/TextPrimary";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { ButtonCard } from "../../styles/ButtonCard";

export const CardExcurio = ({ imgExcursio, title, description, price }) => {
  const [newDescription, setNewDescription] = useState();
  useEffect(() => {
    if (description.length > 70) {
      const corto = `${description.substring(0, 70)} ...`;
      return setNewDescription(corto);
    }
    setNewDescription(description);
  }, [description]);

  return (
    <Grid
      item
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 3,
      }}
      xs={12}
      sm={6}
      md={4}
    >
      <ButtonCard>
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardMedia
            className="img-card"
            sx={{ height: 140 }}
            image={imgExcursio}
            title={title}
          />

          <CardContent>
            <TextPrimary gutterBottom variant="h5" component="div">
              {title}
            </TextPrimary>
            <TextPrimary variant="body2" color="text.secondary">
              {newDescription}
            </TextPrimary>
          </CardContent>
          <CardActions>
            <TextPrimary
              color="primary"
              sx={{ flexGrow: 1, textAlign: "start", ml: 1 }}
            >
              veure mes...
            </TextPrimary>
            <TextPrimary mr={1} fontSize="2rem" color="darkgoldenrod">
              {price}
            </TextPrimary>
          </CardActions>
        </Card>
      </ButtonCard>
    </Grid>
  );
};
