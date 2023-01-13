import { Item } from "./Item";
import { imgCarousel } from "../../assets/imgCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Grid } from "@mui/material";

export const CarouselImg = (props) => {
  return (
    <Grid
      sx={{
        mt: { xs: 4, sm: 6, md: 8 },
        ml: { xs: 4, sm: 6, md: 8 },
        mr: { xs: 4, sm: 6, md: 8 },
        mb: 10,
        width: "100%",
        height: "100%",
      }}
    >
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        transitionTime={1500}
        showThumbs={false}
      >
        {imgCarousel.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
};
