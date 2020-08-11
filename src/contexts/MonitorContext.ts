import { createContext } from 'react';
import { Monitor } from '../utils/Monitor';

export interface IMonitorContext {
    Monitor?: Monitor,
    changeServer(serverAddress: string): void,
}

export const MonitorContext = createContext(undefined as unknown as IMonitorContext);