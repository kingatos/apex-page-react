import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after, ::before {
    box-sizing: inherit;
}

body {
    font-family: 'Montserrat', sans-serif;
    margin: auto;
    padding: 30px;
    background-color: ${({ theme }) => theme.color.swirl};
    word-break: break-word;
    overflow-wrap: break-word;
  }
`;
