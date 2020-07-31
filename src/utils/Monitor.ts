import socketio, { Socket } from 'socket.io-client';

type SocketType = typeof Socket

export class Monitor {
    socket!: SocketType

    constructor(socketioUrl: string) {
        this.socket = socketio(socketioUrl)
    }

    on(event: string, fn: Function){
        this.socket.on(event, fn)
    }
}

export type SocketInfo = {
    id: string,
    namespace: string,
    rooms: {
        [id: string]: string;
    }
}

export type Emitted = {
    to: SocketInfo
    data: Array<any>
}

export type Monitoremitted = {
    name: string,
    data: Array<any>
}

export type Received = {
    from: SocketInfo
    data: Array<any>
}

export enum MessageType{
    Emitted = 'Emitted',
    Received = 'Received',
    Monitoremitted = 'Monitoremitted',
}

export type Message = {
    type: MessageType,
    socket?: SocketInfo,
    name: string,
    data: Array<any>
}