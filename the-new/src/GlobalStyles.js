/* eslint-disable */
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  .red {
    color: $pointColor;
  }
`;
export default GlobalStyles;