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
    margin: 0 auto;
    padding: 20px 0;
    background-color: ${({ theme }) => theme.color.white};
    word-break: break-word;
    overflow-wrap: break-word;
}

h1 { 
    padding: 20px 50px;
    font-weight: 100;
    margin-top: 100px;
}
`;
