import styled from 'styled-components'

export const MainGrid = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;

    grid-template-areas:'connected actions unknow';
    grid-template-rows: 10fr;
	grid-template-columns: 3.3fr 3.3fr 3.3fr;
    /* grid-template-areas:'connected leftdragbar actions rightdragbar unknow';
    grid-template-rows: 10fr;
	grid-template-columns: 3.3fr 6px 3.3fr 6px 3.3fr; */
    
`