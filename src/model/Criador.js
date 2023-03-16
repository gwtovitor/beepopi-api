import mongoose from "mongoose";

const criadorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  name: {
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
  }
});

export const Criador = mongoose.model("Criador", criadorSchema);