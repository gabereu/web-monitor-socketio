import { createContext } from 'react';
import { Socket } from 'socket.io-client';

export interface ConnectionContext {
    connection?: typeof Socket
}

export const connectionContext = createContext(undefined as unknown as ConnectionContext);