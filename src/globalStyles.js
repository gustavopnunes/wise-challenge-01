import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, h1, body, div, table, td, tr {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #C5D1EB;
        font-family: monospace;
        text-align: center;
    }
`;
