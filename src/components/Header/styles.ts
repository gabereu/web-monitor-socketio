import styled from 'styled-components';

export const Header = styled.header`
    grid-area: header;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    background: var(--background);
    color: var(--color);
    border-bottom: 1px solid var(--color);

    svg {
        font-size: 1.5rem;
        cursor: pointer;
    }
`;