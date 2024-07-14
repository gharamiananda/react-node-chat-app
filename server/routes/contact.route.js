



import { Router } from "express";
import { searchContact } from "../controllers/contact.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const contactRoute=Router();
contactRoute.post('/search-contact',verifyToken,searchContact);



export default contactRoute;
