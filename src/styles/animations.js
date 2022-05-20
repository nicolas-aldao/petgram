import { css, keyframes } from "styled-components";

export const fadeIn = ({time = '1s', type = 'ease'} = {}) =>
css`animation: ${time} ${fadeInKeyframes} ${type};`

const fadeInKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity: 0;
}

to {
  filter: blur(0);
  opacity: 1;
}
`;

export const spinAnim = ({ time = "1s" } = {}) =>
  css`
    animation: ${spinKeyframes} ${time} ease-in-out infinite;
    -webkit-animation: ${spinKeyframes} ${time} ease-in-out infinite;
  `;

const spinKeyframes = keyframes`

to { -webkit-transform: rotate(360deg); }
`;
