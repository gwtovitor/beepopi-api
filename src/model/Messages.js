import mongoose, { mongo } from 'mongoose';

const MessagesSchema = mongoose.Schema({
  message: {
    type: String,
    require: true
  }
});

export const Messages = mongoose.model('Messages', MessagesSchema);