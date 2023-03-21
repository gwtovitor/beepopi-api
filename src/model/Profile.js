import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  creator: {
    type: Boolean,
    default: false
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  bio: {
    type: String
  },
  img: {
    type: String
  },
  banner: {
    type: String
  },
  follows: {
    type: Array
  },
  signs: {
    type: Array
  },
  networks: {
    type: Array
  },
  posts: {
    type: Array
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

export const Profile = mongoose.model("Criador", profileSchema);