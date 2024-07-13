import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";
import { sendToken } from "../utils/features.js";
import { compare } from "bcrypt";

export const sigup = async(req, res, next) => {



    try {

        const {email,password}=req.body;

        console.log('req.body', req.body)

        const user=await User.create({email:email,password:password});

console.log('user', user)

        return  sendToken(res,user,201,'User created successfully!')
        

        
    } catch (error) {
        
        console.log('error', error)
        
        
        return res.status(500).send('Internal server error!')


    }
}



export const login = async(req, res, next) => {







    const { email, password } = req.body;

    console.log('email', password,email);

    const user = await User.findOne({
        email
    }).select('+password');

    if (!user || !compare(password, user.password)) {

        return  next(new Error('Invalid email or password'));
    }

    sendToken(res, user, 200, 'User Info get successfully');
}




export const userInfo = async(req, res, next) => {




    const user = await User.findById(req.user?.userId)

  return  res.status(200).json({
        success:true,user,message:'userId'});

    
}



export const userUpdate = async(req, res, next) => {




    const user = await User.findByIdAndUpdate(req.user?.userId,{
        firstName:req.body.firstName,
        lastName:req.body.lastName,
profileSetup:true,
color:req.body.color
    
    
    },

{
    new: true,
    runValidators: true,

})



  return  res.status(200).json({
        success:true,user,message:'User updated successfully'});

    
}


export const verifyToken = async(req, res, next) => {


    const cookietoken= req.cookies[`ananda-chat-app`];


    if(!cookietoken){

        return  res.status(500).json({
            success:true,message:'You are not authoricated'});
    }
    
  jwt.verify(cookietoken,process.env.JWT_SECRET,(err,decode)=>{

        if(err){
            return  res.status(404).json({
                success:true,message:'You are not authoricated'});
        
           }

           req.user=decode;
   }

   )
   
   next() 
}