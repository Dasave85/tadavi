import { Grid, IconButton } from "@mui/material";

import { TextPrimary } from "../../styles/Text/TextPrimary";
import { CardCataleg } from "./CardCataleg";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export const DownloadCataleg = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" mb={3}>
      <Grid item xs={5}>
        <CardCataleg />
      </Grid>
      <Grid item ml={2} xs={4}>
        <TextPrimary fontSize={"4vw"}>Catàleg Tadavi</TextPrimary>
        <IconButton
          href="https://www.viatgestadavi.cat/wp-content/uploads/2020/06/cataleg_hivern_23.pdf"
          target="_blank"
          p={2}
          color="primary"
        >
          <CloudDownloadIcon
            sx={{
              fontSize: "3.5vw",
            }}
          />
          <TextPrimary fontSize={"1.5vw"} ml={"1.5vw"}>
            Descarregar
          </TextPrimary>
        </IconButton>
      </Grid>
    </Grid>
  );
};
