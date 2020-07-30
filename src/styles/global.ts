import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --color: rgb(200,200,200);
        --background: rgb(30,30,30);
        --background-lighter: rgb(80,80,80);
    }
    * {
        margin: 0;
        padding: 0; 
    }
`;