import React, { useContext, useEffect, useState } from 'react'
import { GrClearOption } from "react-icons/gr"

import { Wrapper, MessageContainer } from './styles'

import { MonitorContext } from '../../contexts/MonitorContext'
import { Emitted, Received, Monitoremitted, MessageType, Message } from '../../utils/Monitor'

export default function MessagesComponent() {

    const { Monitor } = useContext(MonitorContext)

    const [messages, setMessages] = useState([] as Message[]);

    useEffect(() => {
        if(Monitor){
            Monitor.on(MessageType.Emitted, (emitted: Emitted) => {
                // console.log('Emitted', emitted)
                setMessages(messages => {
                    messages.push({
                        type: MessageType.Emitted,
                        socket: emitted.to,
                        name: emitted.data[0],
                        data: emitted.data.slice(1),
                    })
                    return [...messages]
                })
            });
            Monitor.on(MessageType.Received, (received: Received) => {
                // console.log('Received', received)
                setMessages(messages => {
                    messages.push({
                        type: MessageType.Received,
                        socket: received.from,
                        name: received.data[0],
                        data: received.data.slice(1),
                    })
                    return [...messages]
                })
            });
            Monitor.on(MessageType.Monitoremitted, (emitted: Monitoremitted) => {
                // console.log('Monitoremitted', emitted)
                setMessages(messages => {
                    messages.push({
                        type: MessageType.Monitoremitted,
                        name: emitted.name,
                        data: emitted.data,
                    })
                    return [...messages]
                })
            });
        }
    }, [Monitor])

    function resetMessages() {
        setMessages([]);
    }

    return (
        <Wrapper>
            <div className='title'>
            <h2>Messages</h2>
            <button onClick={resetMessages}>
                <GrClearOption style={{stroke: 'currentcolor'}} />
            </button>
            </div>
            { messages.map((message, index)=>
                <MessageContainer key={index} type={message.type}>
                    <h1 className='type'>
                        {message.type}&nbsp;-&nbsp;
                        {message.type === MessageType.Received? 'from: ':'to: '}
                        {message.socket?.id}</h1>
                    {/* <div>
                        {message.type === MessageType.Received? 'from: ':'to: '}
                        {message.socket?.id}
                    </div> */}
                    <div>name: {message.name}</div>
                    <div>data: {JSON.stringify(message.data, undefined, 2)}</div>
                    {/* <div>data: {message.data.map(i => JSON.stringify(i)).join(', ')}</div> */}
                </MessageContainer>
            )}
        </Wrapper>
    )
}
