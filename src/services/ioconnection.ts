import socketio from 'socket.io-client';

export const connect = (url: string) => {
    return socketio(url + '/monitor');
}
