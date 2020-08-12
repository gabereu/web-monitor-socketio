import React, { useState } from 'react'

import { MonitorContext } from '../../contexts/MonitorContext'
import { MainGrid } from './styles'

import Connected from '../../components/Connected'
import Messages from '../../components/Messages'
import Header from '../../components/Header'

import { Monitor } from '../../utils/Monitor'

export default function Main() {

    const [monitor, setMonitor] = useState(undefined as unknown as Monitor);

    function changeServer(serverAddress: string) {
        monitor?.socket.disconnect()
        setMonitor(new Monitor(serverAddress + '/monitor'))
    }

    return (
        <MonitorContext.Provider value={{Monitor: monitor, changeServer}}>
                <MainGrid>
                    <Header />
                    <Connected />
                    <Messages />
                    <div
                        style={{
                            gridArea: 'unknow',
                            backgroundColor: 'var(--background)',
                        }}
                    ></div>
                </MainGrid>
        </MonitorContext.Provider>
    )
}
