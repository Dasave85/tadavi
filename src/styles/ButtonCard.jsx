import styled from "@emotion/styled";
import { Button, keyframes } from "@mui/material";

export const ButtonCard = styled(Button)(() => ({
  "&:hover .img-card": {
    animation: `${kenBurns} 5s ease-out infinite alternate both`,
  },
  "&:hover .card": {
    animation: `${shadow} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, ${scaleUp} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
  },
}));

const kenBurns = keyframes`
    0% {
    -webkit-transform: scale(1) translate(0, 0);
            transform: scale(1) translate(0, 0);
    -webkit-transform-origin: 84% 84%;
            transform-origin: 84% 84%;
  }
  100% {
    -webkit-transform: scale(1.25) translate(20px, 15px);
            transform: scale(1.25) translate(20px, 15px);
    -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
  }
`;
const scaleUp = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.05);
            transform: scale(1.05);
  }
`;

const shadow = keyframes`
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px);
            transform: translateZ(50px);
    -webkit-box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 25px 0px rgba(0, 0, 0, 0.35);
  }
`;
