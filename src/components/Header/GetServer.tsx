import React, { useState, useContext } from 'react'

import { GetServerContainer } from './styles'

import { MonitorContext } from '../../contexts/MonitorContext'

const GetServer = () => {

    const { changeServer } = useContext(MonitorContext);

    const [serverAddress, setServerAddress] = useState('ws://localhost:3333');
    const [changed, setChanged] = useState<boolean>()
    const [firstTime, setFirstTime] = useState(true);

    function handleInputChange (event: React.ChangeEvent<HTMLInputElement>) {
        setServerAddress(event.target.value);
        setChanged(true)
    }

    function handleFormSubmit(event: React.FormEvent) {
        event.preventDefault();
        changeServer(serverAddress);
        setFirstTime(false);
        setChanged(false);
    }

    return (
        <GetServerContainer onSubmit={handleFormSubmit}>
            <label htmlFor="server-address-input">Server Address</label>
            <input
                type="text"
                id='server-address-input'
                value={serverAddress}
                onChange={handleInputChange}
                onFocus={e => e.target.select()}
            />
            <button>
                {firstTime ?
                    'Set':
                    changed ?
                        'Change'
                        :
                        'Connected'
                }
            </button>
        </GetServerContainer>
    )
}

export default GetServer
