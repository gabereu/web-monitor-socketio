import styled from 'styled-components';

export const Wrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 10px;
    grid-area: 'connected';
    background-color: var(--background);
    color: var(--color);
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