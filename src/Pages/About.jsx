import { Grid } from "@mui/material";
import bgAbout from "../assets/imgAbout/travel-about.jpg";
import about from "../assets/imgAbout/quisom.jpg";
import sign from "../assets/imgAbout/about-single-img-2.png";
import { TextCarousel } from "../styles/Text/TextCarousel";
import { TextPrimary } from "../styles/Text/TextPrimary";

export const About = () => {
  return (
    <Grid container>
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
          <img src={bgAbout} width="100%" alt="plane" />
        </Grid>
        <TextCarousel> Qui Som</TextCarousel>
      </Grid>
      <Grid container mt={10} justifyContent="center" alignItems="center">
        <Grid item xs={5} mr={3}>
          <img src={about} width="100%" height="auto" alt="about" />
        </Grid>
        <Grid item xs={4}>
          <TextPrimary fontSize="4vw">Que fem!</TextPrimary>
          <TextPrimary fontSize="1vw" mb="1.5vw">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            hic error debitis harum esse repellat quos deserunt fugiat earum, ab
            in nihil corrupti fuga laudantium culpa impedit quisquam.
            Doloremque, expedita?
          </TextPrimary>
          <Grid item sx={{ width: "8vw" }}>
            <img src={sign} width="100%" height="auto" alt="sign" />
          </Grid>
          <TextPrimary fontSize="1vw" color="grey">
            CEO
          </TextPrimary>
        </Grid>
      </Grid>
    </Grid>
  );
};
