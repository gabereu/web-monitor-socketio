import styled from 'styled-components';

export const Wrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 10px;
    grid-area: 'connected';
    background-color: var(--background);
    color: var(--color);
    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        button{
            padding: 5px;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            border-radius: 8px;
            color: var(--color);
            background: var(--background);
            border: 1px solid var(--color);
            svg{
                stroke: currentColor;
            }
        }
    }
`;

export const Connection = styled.div`
    padding: 7px 5px;
    font-size: 1.3rem;
    margin: 10px 0;
    background-color: var(--background);
    border: 2px solid var(--color);
    border-radius: 5px;
    .title{
        font-size: 1.4rem;
    }
`;