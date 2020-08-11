import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineReload } from "react-icons/ai"

import { Wrapper, Connection } from './styles'

import { MonitorContext } from '../Main/MonitorContext'
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
    }, [Monitor]);

    function reloadConnections() {
        Monitor.socket.emit('getSockets', '/', (sockets: Array<any>)=>{
            setConnections(sockets);
        });
    }

    return (
        <Wrapper>
            <div className='title'>
            <h2>Connections</h2>
            <button onClick={reloadConnections}>
                <AiOutlineReload />
            </button>
            </div>
            {connections.map((connection, key)=><Connection key={key}>
                <h2 className='title'>Socket id: {connection.id} {Monitor.socket.id.split('#')[1] === connection.id ? ': Me': ''}</h2>
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
