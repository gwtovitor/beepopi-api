import mongoose from 'mongoose';

const ComentarioSchema = mongoose.Schema({
  perfil: {
    type: String,
    require: true
  },
  content: {
    type: String,
  },
  likes: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
});

export const Comentario = mongoose.model('Comentario', ComentarioSchema);