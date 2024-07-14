import express from 'express';
// import userRoutes from "./routes/user.route.js";
import { connectDB } from './utils/features.js';
import cors from 'cors';
import dotenv from 'dotenv';
// import { errorMiddleware } from './middlewares/error.js';
import cookieParser from 'cookie-parser'
import { Server } from 'socket.io';
import { createServer, METHODS } from 'http'
import authRoute from './routes/auth.route.js';
import contactRoute from './routes/contact.route.js';
import setupSocket from './socketio.js';
dotenv.config();

const port= process.env.PORT || 3001;


const app = express();
const whitelist = ['http://example1.com', 'http://example2.com']

const corsOptions = {
    origin: [process.env.ORIGIN],
    METHODS:['GET', 'POST', 'PUT', 'DELETE','PATCH'],
    credentials:true
    
}
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json());

connectDB(process.env.MONGODB_URI);

// const server = createServer(app)
// const io = new Server(server);


// io.on('connection', (socket) => {
//   console.log('a user connected', socket);

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/contacts', contactRoute);


app.get('/', (req, res) => {
  res.send('Welcome to chattu');
});

// app.use(errorMiddleware);

// server.listen(port)
 const server= app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})
setupSocket(server)