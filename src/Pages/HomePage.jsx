import { Grid } from "@mui/material";
import React from "react";
import { CarouselImg } from "../components/Carousel/CarouselImg";
import { Destinacions } from "../components/Destinacions/Destinacions";
import { DownloadCataleg } from "../components/DownloadCataleg/DownloadCataleg";
import { Excursions } from "../components/Excursions/Excursions";

export const HomePage = () => {
  return (
    <Grid container>
      <CarouselImg />
      <DownloadCataleg />
      <Excursions />
      <Destinacions />
    </Grid>
  );
};
