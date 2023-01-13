import { Divider, Grid, IconButton } from "@mui/material";

import React from "react";
import { TextPrimary } from "../../styles/Text/TextPrimary";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <Grid mt={15} pb={2} sx={{ backgroundColor: "rgba(0,0,0, .05)" }}>
      <Grid item xs={12} mb={5}>
        <Divider sx={{ boxShadow: 12, border: "0px solid black" }} />
      </Grid>
      <Grid container textAlign="center" alignItems="center" mb={5}>
        <Grid item xs={12} md={6}>
          <TextPrimary fontSize="2.8vw">Informació de contacte</TextPrimary>
          <TextPrimary fontSize="1.3vw">
            Passeig Circumval•lació, 48 - Navàs - 93-839.15.04
          </TextPrimary>
          <TextPrimary fontSize="1.3vw">
            Carrer Sant Miquel, 13 - Solsona - 973-48.13.23
          </TextPrimary>
          <TextPrimary fontSize="1.3vw">
            E-MAIL: viatgestadavi@gmail.com
          </TextPrimary>
          <TextPrimary fontSize="1.3vw">www.viatgestadavi.cat</TextPrimary>
          <TextPrimary fontSize="1.3vw">WhatsApp: 690 88 26 08</TextPrimary>
          <TextPrimary fontSize="1.3vw">
            Facebook: www.facebook.com/viatgestadavitours
          </TextPrimary>
          <TextPrimary fontSize="1.3vw">
            Instagram: @viatgestadavitours
          </TextPrimary>
        </Grid>
        <Grid item xs={12} md={6} mt={3}>
          <TextPrimary fontSize="1.5vw">Xarxes socials</TextPrimary>

          <Grid item mt={3}>
            <IconButton>
              <FacebookIcon sx={{ fontSize: "3vw" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href="https://www.instagram.com/viatgestadavitours/"
              target="_blank"
            >
              <InstagramIcon sx={{ fontSize: "3vw" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} textAlign="center" mt={10}>
        <TextPrimary>Copyright 2022 Viatges Tadavi Tours SL</TextPrimary>
      </Grid>
    </Grid>
  );
};
