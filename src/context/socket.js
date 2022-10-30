import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import {AuthContext} from './authContext';

let initState = {};

const SocketContext = createContext(initState);

export const SocketProvider = ({ children }) => {

    const [socket, setSocket] = useState({});
    const { user } = useContext(AuthContext);
    console.log(user)
    useEffect(() => {
        if (true) {
            const socket = io(process.env.NEXT_PUBLIC_AUTH_API, {
                reconnectionDelayMax: 10000,
                auth: {
                  token: "123"
                },
                query: {
                  "my-key": "my-value"
                }
              });
            socket.on('connect', () => {
                console.log('connected')
            });
            setSocket(socket);
            return () => socket.close();
        }
    }, [setSocket, user]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}

export default SocketContext;