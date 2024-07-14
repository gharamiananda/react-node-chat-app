import { Router } from "express";
import { login, logout, sigup, userInfo, userUpdate, verifyToken } from "../controllers/auth.controller.js"

const authRoute=Router();
authRoute.post('/signup',sigup);
authRoute.post('/login',login);
authRoute.get('/userInfo',verifyToken,userInfo);
authRoute.post('/updateUser',verifyToken,userUpdate);

authRoute.post('/logout',logout);



export default authRoute;