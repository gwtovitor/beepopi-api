import mongoose, { mongo } from 'mongoose';

const ChatSchema = mongoose.Schema({
  message: {
    text: { type: String, required: true },
  },
  users: Array,
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
},
  {
    timestamps: true
  }
);

export const Chat = mongoose.model('Chat', ChatSchema);