import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const TextCarousel = styled(Typography)(() => ({
  fontFamily: "Kanit, sans-serif",
  fontSize: "4.5vw",
  width: "50vw",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
}));
