import { PayMethod } from '../model/PayMethod.js';

export const findAllPayMethod = () => {
  return PayMethod.find();
}

export const findPayMethodById = (id) => {
  return PayMethod.finsById(id);
}

export const findPayMethodByUser = (userId) => {
  return PayMethod.find({ user: userId });
}

export const createPayMethod = (payMethod) => {
  return PayMethod.create(payMethod);
}

export const updatePayMethod = (id, payMethod) => {
  return PayMethod.findOneAndUpdate(id, payMethod);
}

export const deletePayMethod = (id) => {
  return PayMethod.findOneAndDelete(id);
}