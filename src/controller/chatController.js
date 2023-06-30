import { createChat, findChatByUsers } from '../service/chatService.js';
import { Server } from 'socket.io';
import cors from 'cors';

export const chat = (server) => {
  const io = new Server(server, {
    cors: { origin: '*' }
  });

  global.onlineUsers = new Map();
  io.on("connection", (socket) => {
    console.log("connection")
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
      console.log("send-msg")
      const sendUserSocket = onlineUsers.get(data.to);
      if (sendUserSocket) {
        console.log(sendUserSocket)
        socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      }
    });
  });
};

export const getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const messages = await findChatByUsers([from, to]);

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
  } catch (ex) {
    next(ex);
  }
};

export const addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await createChat({
      message: { text: message },
      users: [from, to],
      sender: from,
    });

    if (data) return res.json({ msg: "Message added successfully." });
    else return res.json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    next(ex);
  }
};