import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --color: ${({theme})=>theme.name === 'dark'? '#abadb8' : '#757575' };
        --background: ${({theme})=>theme.name === 'dark'? '#1f2129' : '#f7f8ff' };
        --background-lighter: #4b5d67;
        
        --message-Emitted: #4b5d67;
        --message-Received: #ae77b5;
        --message-Monitoremitted: #2ee69c;

        --color-1: #4b5d67;
        --color-2: #322f3d;
        --color-4: #87556f;
    }
    * {
        margin: 0;
        padding: 0;
    }
    html,body{
        font-size: 16px;
        width: 100vw;
    }
`;