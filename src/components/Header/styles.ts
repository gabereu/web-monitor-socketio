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

export const GetServerContainer = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    label {
        font-size: 1.4rem;
        color: var(--color);
        margin-right: 1rem;
    }
    input, button {
        padding: 5px 10px;
        color: var(--color);
        font-size: 1.2rem;
        background: var(--background);
        border: 1px solid var(--color);
        border-radius: 5px;
    }
    input {
        margin-right: 1.2rem;
    }
    button {
        cursor: pointer;
    }
`;