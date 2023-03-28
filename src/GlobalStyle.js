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
    background-color: ${({ theme }) => theme.color.swirl};
    word-break: break-word;
    overflow-wrap: break-word;
}

h1 { 
    padding: 20px;
}
`;
