import mongoose from 'mongoose';

const PayMethodSchema = mongoose.Schema({
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true
  },
  expiration: {
    type: String,
    required: true
  },
  cardName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

export const PayMethod = mongoose.model('PayMethod', PayMethodSchema);