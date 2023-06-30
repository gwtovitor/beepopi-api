import { Chat } from '../model/Chat.js'

export const findAllChat = () => Chat.find();

export const findChatById = (id) => Chat.findById(id);

export const findChatByUsers = (users) => Chat.find({ users: { $all: users } }).sort({ updatedAt: 1 });

export const createChat = (message) => Chat.create(message);

export const updateChat = (id, mensagens) => Chat.findByIdAndUpdate(id, mensagens);

export const deleteChat = (id) => Chat.findByIdAndDelete(id);