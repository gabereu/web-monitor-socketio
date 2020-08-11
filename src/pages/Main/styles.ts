import styled from 'styled-components'

export const MainGrid = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    display: grid;

    grid-template-areas:
    'header header header'
    'connected actions unknow';
    grid-template-rows: 100px 1fr;
	grid-template-columns: 3.3fr 3.3fr 3.3fr;
    /* grid-template-areas:'connected leftdragbar actions rightdragbar unknow';
    grid-template-rows: 10fr;
	grid-template-columns: 3.3fr 6px 3.3fr 6px 3.3fr; */
    
`