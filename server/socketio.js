import { Server as SocketIoServer } from "socket.io";
import Messages from "./models/message.model.js";


const setupSocket = (server) => {
    const io = new SocketIoServer(server, {
        cors: {
            origin: [process.env.ORIGIN],
            methods: ['GET', 'POST'],
            credentials: true
        }
    });



    const userSocketMap = new Map();
    const disconnectSocket = (socket) => {
        console.log('user disconnected with skt id', socket.id);


        for (const [userId, socketId] in userSocketMap.entries()) {
            if (socket.id === socketId) {
                userSocketMap.delete(userId);
                break;

            }
        }

    }

    const sendMessage = async(message) => {
        console.log('message', message)

    
const senderSocketId=userSocketMap.get(message.sender);
const recipientSocketId=userSocketMap.get(message.recipient);
// return;

try {
    

    console.log('message', message)

const createdMessages=await Messages.create({...message,

    messageType:'text'
});

console.log('createdMessages', createdMessages)
const messageData=await Messages.findById(createdMessages._id)
.populate('sender','_id email firstName lastName image color')
.populate('recipient','_id email firstName lastName image color')



if(recipientSocketId){
    io.to(recipientSocketId).emit('receivedMessage', messageData);
}

if(senderSocketId){
    io.to(senderSocketId).emit('receivedMessage', messageData);

}
} catch (error) {
    console.log('error', error)
}


    }


    io.on('connection', (socket) => {

        const userId = socket.handshake.query.userId;

        if (userId) {
            userSocketMap.set(userId, socket.id)
            console.log('user connected with skt id', socket.id)
        } else {
            console.log('user id required');
        }


        socket.on('sendMessage',sendMessage)
        socket.on('disconnect', () => disconnectSocket(socket));
    });



}


export default setupSocket