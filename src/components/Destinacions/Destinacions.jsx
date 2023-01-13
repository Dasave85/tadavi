import { Divider, Grid, Icon, IconButton } from "@mui/material";
import React from "react";
import { TextPrimary } from "../../styles/Text/TextPrimary";
import plane from "../../assets/iconsDestins/airplane.png";
import beach from "../../assets/iconsDestins/beach-chair.png";
import position from "../../assets/iconsDestins/positions.png";
import city from "../../assets/iconsDestins/buildings.png";
import guarantee from "../../assets/iconsRaons/guarantee.png";
import operator from "../../assets/iconsRaons/operator.png";
import trust from "../../assets/iconsRaons/trust.png";
import responsive from "../../assets/iconsRaons/responsive-design.png";
import finance from "../../assets/iconsRaons/euro.png";
import smy from "../../assets/iconsRaons/descarga.jpg";

export const Destinacions = () => {
  return (
    <Grid mt={10} container justifyContent="center">
      <Grid item xs={12}>
        <TextPrimary textAlign="center" fontSize="4vw">
          Les nostres destinacions
        </TextPrimary>
      </Grid>
      <Grid item sx={{ display: "flex", justifyContent: "center" }} xs={12}>
        <Divider sx={{ width: "10vw", mb: 2 }} />
      </Grid>
      <Grid item xs={4}>
        <TextPrimary color="grey" textAlign="center" fontSize="1.2vw">
          Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Justo eget
          magna fermentum iaculis eu non. Pellentesque sit amet porttitor eget
          dolor.
        </TextPrimary>
      </Grid>
      <Grid container justifyContent="space-evenly" mt={5}>
        <Grid item>
          <IconButton
            href="https://viatgestadavinavas.traveltool.es/"
            target="_blank"
          >
            <Icon sx={{ width: "15vw", height: "auto" }}>
              <img src={position} width="100%" height="auto" alt="proximitat" />
            </Icon>
          </IconButton>
          <TextPrimary fontSize="2vw" textAlign="center" color="primary">
            A PROP DE TU
          </TextPrimary>
        </Grid>
        <Grid item>
          <IconButton
            href="https://viatgestadavinavas.traveltool.es/viajes/europa/"
            target="_blank"
          >
            <Icon sx={{ width: "15vw", height: "auto" }}>
              <img src={city} width="100%" height="auto" alt="proximitat" />
            </Icon>
          </IconButton>
          <TextPrimary fontSize="2vw" textAlign="center" color="primary">
            CITY BREAKS
          </TextPrimary>
        </Grid>
        <Grid item>
          <IconButton
            href="https://viatgestadavinavas.traveltool.es/viajes/mediterraneo/"
            target="_blank"
          >
            <Icon sx={{ width: "15vw", height: "auto" }}>
              <img src={beach} width="100%" height="auto" alt="proximitat" />
            </Icon>
          </IconButton>
          <TextPrimary fontSize="2vw" textAlign="center" color="primary">
            MEDITERRANI
          </TextPrimary>
        </Grid>
        <Grid item>
          <IconButton
            href="https://viatgestadavinavas.traveltool.es/grandes-viajes/"
            target="_blank"
          >
            <Icon sx={{ width: "15vw", height: "auto" }}>
              <img src={plane} width="100%" height="auto" alt="proximitat" />
            </Icon>
          </IconButton>
          <TextPrimary fontSize="2vw" textAlign="center" color="primary">
            CARIB
          </TextPrimary>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={15}>
        <TextPrimary textAlign="center" fontSize="2vw">
          6 RAONS PER RESERVAR ELS TEUS VIATGES AMB TADAVI
        </TextPrimary>
      </Grid>
      <Grid container justifyContent="space-evenly" mt={5}>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon sx={{ width: "7vw", height: "auto" }}>
            <img src={guarantee} width="100%" height="auto" alt="proximitat" />
          </Icon>
          <TextPrimary fontSize="1.5vw" textAlign="center" color="primary">
            GARANTIA
          </TextPrimary>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon sx={{ width: "7vw", height: "auto" }}>
            <img src={operator} width="100%" height="auto" alt="proximitat" />
          </Icon>
          <TextPrimary fontSize="1.5vw" textAlign="center" color="primary">
            PROFESSIONALITAT
          </TextPrimary>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon sx={{ width: "7vw", height: "auto" }}>
            <img src={trust} width="100%" height="auto" alt="proximitat" />
          </Icon>
          <TextPrimary fontSize="1.5vw" textAlign="center" color="primary">
            CONFIANÇA
          </TextPrimary>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon sx={{ width: "7vw", height: "auto" }}>
            <img src={responsive} width="100%" height="auto" alt="proximitat" />
          </Icon>
          <TextPrimary fontSize="1.5vw" textAlign="center" color="primary">
            MULTI CANAL
          </TextPrimary>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon sx={{ width: "7vw", height: "auto" }}>
            <img src={finance} width="100%" height="auto" alt="proximitat" />
          </Icon>
          <TextPrimary fontSize="1.5vw" textAlign="center" color="primary">
            FINANÇAMENT
          </TextPrimary>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon sx={{ width: "7vw", height: "auto" }}>
            <img src={smy} width="100%" height="auto" alt="proximitat" />
          </Icon>
          <TextPrimary fontSize="1.5vw" textAlign="center" color="primary">
            SmyTravel
          </TextPrimary>
          <TextPrimary fontSize="1.5vw" textAlign="center" color="primary">
            100% DINÀMIC
          </TextPrimary>
        </Grid>
      </Grid>
    </Grid>
  );
};
