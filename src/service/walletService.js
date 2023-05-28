import { Wallet } from '../model/Wallet.js';

export const findAllWallet = () => {
  return Wallet.find();
}

export const findWalletById = (id) => {
  return Wallet.findById(id);
}

export const findWalletByUser = (userId) => {
  return Wallet.find({ user: userId });
}

export const createWallet = (wallet) => {
  return Wallet.create(wallet);
}

export const updateWallet = (id, wallet) => {
  return Wallet.findOneAndUpdate(id, wallet);
}

export const deleteWallet = (id) => {
  return Wallet.findOneAndDelete(id);
}