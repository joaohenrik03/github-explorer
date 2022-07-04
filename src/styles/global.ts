import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;

        --background-color: #0d1117;

        @media (max-width: 1024px) {
            font-size: 56.5%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        height: 100%;
        width: 100%;
    }

    body {
        font-size: 1.6rem;
        color: #d9e0e8;
        font-family: 'Poppins', sans-serif;

        background-color: var(--background-color);
    }

    ul {
        list-style: none;
    }    
`