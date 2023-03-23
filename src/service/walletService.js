import { Wallet } from '../model/Wallet.js';

export const findAllWallet = () => {
  return Wallet.find();
}

export const createWallet = (wallet) => {
  return Wallet.create(wallet);
}

export const updateWallet = (id, wallet) => {
  return Wallet.findOneAndUpdate(id, wallet);
}

export const deleteWallet = (id, wallet) => {
  return Wallet.findOneAndDelete(id, wallet);
}