import mongoose from 'mongoose';

const WalletSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  saldo: {
    type: String,
    required: true
  },
  saque: {
    type: String
  }
});

export const Wallet = mongoose.model('Wallet', WalletSchema);