import React from 'react'
import { BsMoon } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";
import { useTheme } from 'styled-components'

import { Header as HeaderStyled } from './styles'
import GetServer from './GetServer'

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
            <GetServer />
            { theme.name === 'dark'?
                <RiSunLine onClick={changeToLight} />
                :
                <BsMoon onClick={changeToDark} /> }
        </HeaderStyled>
    )
}

export default Header
