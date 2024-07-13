import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

 export const cookieOptions={
    maxAge: 3*24*60*60*1000,
    sameSite:"none",
    secure:true,
    // httpOnly:true

}

const connectDB = (uri) => {
    mongoose.connect(uri, { dbName: "chat-app-reactnode" })
        .then(res => {
            console.log(`Connected to MongoDB ${res.connection.host} `)
        }).catch(err => {

            console.log(err)
            throw err;
        });
}

const sendToken = async(res,user,code,message) => {
const token=jwt.sign({userId:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:process.env.EXPIRES_IN})

await res.cookie('ananda-chat-app',token,cookieOptions)
return res.status(code).json({
    success:true,
    token,user,message});
}

export {
    connectDB,
    sendToken
}