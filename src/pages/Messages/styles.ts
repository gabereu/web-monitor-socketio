import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    grid-area: 'actions';
    box-sizing: border-box;
    padding: 10px;
    background-color: var(--background);
    color: var(--color);
    border: 1px solid var(--color);
    border-top: none;
    border-bottom: none;
`;

interface TitleProps {
    readonly type: string;
  };

export const MessageContainer = styled.div<TitleProps>`
    padding: 10px 5px;
    background-color: var(--background);
    /* background-color: ${({type})=>`var(--message-${type})`}; */
    border: 2px solid ${({type})=>`var(--message-${type})`};
    border-radius: 5px;
    font-size: 1.3rem;
    margin: 10px 0;
    .type{
        font-size: 1.4rem;
    }
`