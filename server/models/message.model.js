import mongoose from "mongoose";
import {genSalt ,hash} from 'bcrypt'

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:"Users"


    },

    recipient: {
        type: mongoose.Types.ObjectId,
        required: false,
        ref:"Users"


    },
    messageType: {
        type: String,
        enum: ['text', 'file'],
default:'text'
    },
    content: {
        type: String,
        required: ()=>{
            return this?.messageType==='text'
        },
    },
    fileUrl: {
        type: String,
        required: ()=>{
            return this?.messageType==='file'
        },
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
});
const Messages=mongoose.model('Messages',messageSchema);

export default Messages;