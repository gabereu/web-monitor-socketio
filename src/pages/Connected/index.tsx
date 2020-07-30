import React, { useContext, useEffect, useState } from 'react'

import { Wrapper, Connection } from './styles';

import { MonitorContext } from '../Main/MonitorContext';
import { Emitted, Received } from '../../utils/Monitor'

export default function Connected() {

    const Monitor = useContext(MonitorContext)

    const [connections, setConnections] = useState([] as Array<any>)

    useEffect(() => {
        if(Monitor){
            Monitor.on('Connected', (socketInfo: any) => setConnections(actual => ([...actual, socketInfo])))
            Monitor.on('Emitted', (emitted: Emitted) => {
                if(emitted.data[0] === 'disconnect'){
                    setConnections(actual => actual.filter(connection => connection.id !== emitted.to.id))
                }else{
                    setConnections(actual => {
                        const connection = actual.find(item => item.id === emitted.to.id)
                        if(connection){
                            connection.namespace = emitted.to.namespace
                            connection.rooms = emitted.to.rooms
                        }
                        return [...actual];
                    })
                }
            });
            Monitor.on('Received', (received: Received) => {
                
                setConnections(actual => {
                    const connection = actual.find(item => item.id === received.from.id)
                    if(connection){
                        connection.namespace = received.from.namespace
                        connection.rooms = received.from.rooms
                    }
                    return [...actual];
                })
                
            });
            Monitor.socket.emit('getSockets', '/', (sockets: Array<any>)=>{
                setConnections(sockets);
                console.log(sockets)
            });
        }
    }, [Monitor])

    return (
        <Wrapper>
            {connections.map((connection, key)=><Connection key={key}>
                {connection.id} {Monitor.socket.id.split('#')[1] === connection.id ? ': Me': ''}
                <div>
                    namespace: {connection.namespace}
                </div>
                <div>
                    rooms: {Object.values(connection.rooms || {}).join(', ')}
                </div>
            </Connection>)}
        </Wrapper>
    )
}
