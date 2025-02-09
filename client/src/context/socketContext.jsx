import { useAppStore } from "@/store";
import { HOST } from "@/utils/constants";
import { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";



const SocketContext = createContext(null);


export const useSocket = () => {
    return useContext(SocketContext)
}


export const SocketContextProvider = ({ children }) => {

    const socket = useRef();


    const { userInfo } = useAppStore();

    useEffect(() => {
        if (userInfo) {
            socket.current = io(HOST, {
                withCredentials: true,
                query: {
                    userId: userInfo._id
                }
            });

            socket.current.on('connect', () => {
                console.log('connected to the server')
            });


            const handleReceivedMessage = (message) => {
                const { selectChatData, selectChatType,addChatMessage } = useAppStore.getState();

                if (selectChatType !== undefined  && (selectChatData?._id === message?.sender?._id || selectChatData?._id === message?.recipient?._id)) {


                    console.log('messageRecived', message)
                    addChatMessage(message)
                }

            }

            socket.current.on('receivedMessage', handleReceivedMessage);


            return () => {
                socket.current.disconnect();
            }

        }
    }, [userInfo])




    return (

        <SocketContext.Provider value={socket.current}>
            {children}
        </SocketContext.Provider>
    )
}