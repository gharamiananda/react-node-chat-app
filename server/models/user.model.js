import mongoose from "mongoose";
import {genSalt ,hash} from 'bcrypt'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false

    },
    lastName: {
        type: String,
        required: false

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select:false,
    },
    image: {
        type: String,
        required: false

    },
    color:{
        type: Number,
        required: false
    },
    profileSetup:{
        type: Boolean,
        default: false
    }
});

userSchema.pre('save',async function(next) {
        const salt=await genSalt();
        console.log('password hashed', this.password)

        this.password = await hash(this.password, salt);
        console.log('password hashed', this.password)
        next()
});

const User=mongoose.model('Users',userSchema);

export default User;