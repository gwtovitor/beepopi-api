import express from 'express';
import { addMessage, getMessages } from '../controller/chatController.js';

export const chatRoutes = express.Router();

chatRoutes.post("/addmsg/", addMessage);
chatRoutes.post("/getmsg/", getMessages);