import React, { useState, useEffect } from 'react'
import { connectionContext, ConnectionContext } from './connectContext'
import { connect } from '../../services/ioconnection';

export default function Main() {

    const [context, setContext] = useState(undefined as unknown as ConnectionContext);

    useEffect(() => {
        const url = prompt('server ulr');
        if(!url) return;
        setContext({
            connection: connect(url)
        });
    }, []);

    return (
        <connectionContext.Provider value={context}>
            
        </connectionContext.Provider>
    )
}
