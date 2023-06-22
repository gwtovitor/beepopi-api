import mongoose from 'mongoose';

const DocumentosSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true
  },
  rgfrente: {
    type: String,
    default: ''
  },
  rgverso: {
    type: String,
    default: ''
  },
  rgself: {
    type: String,
    default: ''
  },
  cpf: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export const Documentos = mongoose.model('Documentos', DocumentosSchema);