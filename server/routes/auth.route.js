import { Router } from "express";
import { login, sigup, userInfo, userUpdate, verifyToken } from "../controllers/auth.controller.js"

const authRoute=Router();
authRoute.post('/signup',sigup);
authRoute.post('/login',login);
authRoute.get('/userInfo',verifyToken,userInfo);
authRoute.post('/updateUser',verifyToken,userUpdate)


export default authRoute;