import { createPayMethod, deletePayMethod, findAllPayMethod, updatePayMethod } from '../service/payMethodService.js'

export const findAll = async (req, res) => {
  try {
    const payMethods = await findAllPayMethod();

    res.status(200).send(payMethods);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export const create = async (req, res) => {
  try {
    const payMethod = await createPayMethod(req.body);

    res.status(200).send(payMethod);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params.id;

    const payMethods = await updatePayMethod(id, req.body);

    res.status(200).send({ message: 'Payment method has been updated.' });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export const del = async (req, res) => {
  try {
    const { id } = req.params.id;

    const payMethods = await deletePayMethod(id);

    res.status(200).send({ message: 'Payment method has been deleted.' });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}
