import imgCataleg from "../../assets/cataleg_hivern_23.jpg";
import CardMedia from "@mui/material/CardMedia";

import { CardCatalegStyle } from "../../styles/CardCatalegStyle";

export const CardCataleg = () => {
  return (
    <CardCatalegStyle>
      <CardMedia>
        <img src={imgCataleg} width="100%" height="100%" alt="cataleg" />
      </CardMedia>
    </CardCatalegStyle>
  );
};
