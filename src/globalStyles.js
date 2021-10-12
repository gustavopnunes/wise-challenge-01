import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, h1, body, div, footer, table, td, tr, a {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100vh;
        background-color: #C5D1EB;
        font-family: monospace;
        text-align: center;
        flex-direction: column;
        display: flex;
        flex-direction: column;
    }
`;
