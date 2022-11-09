import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import {AuthContext} from './authContext';

let initState = {};

const SocketContext = createContext(initState);

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState({});
    const { user, isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated) {
            const socket = io(process.env.NEXT_PUBLIC_AUTH_API, {
                reconnectionDelayMax: 2000,
                auth: {
                  token: Date.now(),
                },
                query: {
                  "username": user?.name
                }
              });
            socket.on('connect', () => {
                console.log('connected')
                setSocket(socket);
            });
            return () => socket.close();
        }
    }, [user]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}

export default SocketContext;