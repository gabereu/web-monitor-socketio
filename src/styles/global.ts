import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --color: rgb(200,200,200);
        --background: #322f3d;
        --background-lighter: #4b5d67;
        
        --message-Emitted: #4b5d67;
        --message-Received: #59405c;
        --message-Monitoremitted: #87556f;

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
    }
`;