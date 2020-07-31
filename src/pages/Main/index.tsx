import React, { useState, useEffect } from 'react'

import { MonitorContext } from './MonitorContext'
import { MainGrid } from './styles'

import Connected from '../Connected'
import Messages from '../Messages'

import { Monitor } from '../../utils/Monitor'

export default function Main() {

    const [monitor, setMonitor] = useState(undefined as unknown as Monitor);

    useEffect(() => {
        // const url = prompt('server ulr');
        // if(!url) return;
        setMonitor(new Monitor('ws://localhost:3333/monitor'));
    }, []);

    return (
        <MonitorContext.Provider value={monitor}>
            <MainGrid>
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
