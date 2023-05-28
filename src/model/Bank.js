import mongoose from 'mongoose';

const BankSchema = mongoose.Schema({
  banco: {
    type: String,
    required: true
  },
  tipoConta: {
    type: String,
    required: true
  },
  agencia: {
    type: String,
    required: true
  },
  conta: {
    type: String,
    required: true
  },
  pix: {
    type: String,
    required: true
  },
  chavePix: {
    type: String,
    required: true
  },
});

export const Bank = mongoose.model('Bank', BankSchema);