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
  valorAssinatura: {
    type: String,
    default: '0,00'
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  bio: {
    type: String,
    default: ""
  },
  img: {
    type: String,
    default: ""
  },
  banner: {
    type: String,
    default: ""
  },
  role: {
    type: String,
    default: ""
  },
  followers: {
    type: Array,
    default: []
  },
  following: {
    type: Array,
    default: []
  },
  subscribers: {
    type: Array,
    default: []
  },
  subscribing: {
    type: Array,
    default: []
  },
  networks: {
    type: Array,
    default: []
  },
  posts: {
    type: Array,
    default: []
  },
  arquivados: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

export const Profile = mongoose.model("Profile", profileSchema);