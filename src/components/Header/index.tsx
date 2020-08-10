import React from 'react'
import { BsMoon } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";
import { useTheme } from 'styled-components'

import { Header as HeaderStyled } from './styles'

function Header() {

    const theme = useTheme();

    function changeToDark() {
        theme.defineTheme('dark');
    }
    function changeToLight() {
        theme.defineTheme('light');
    }

    return (
        <HeaderStyled>
            <h1>Monitor Socket.IO</h1>
            { theme.name === 'dark'?
                <RiSunLine onClick={changeToLight} />
                :
                <BsMoon onClick={changeToDark} /> }
        </HeaderStyled>
    )
}

export default Header
