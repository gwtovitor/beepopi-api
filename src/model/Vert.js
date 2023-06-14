import mongoose from 'mongoose';

const VertSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  legenda: {
    type: String,
  },
  likes: {
    type: Array,
    default: []
  },
  comments: {
    type: Array,
    default: []
  },
  denyComments: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
})

export const Vert = mongoose.model("Vert", VertSchema);