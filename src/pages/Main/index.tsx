import React, { useState, useEffect } from 'react'

import { MonitorContext } from './MonitorContext'

import Connected from '../Connected'

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
            <Connected />
        </MonitorContext.Provider>
    )
}
