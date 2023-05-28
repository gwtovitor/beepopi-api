import { createWallet, deleteWallet, findAllWallet, updateWallet } from '../service/walletService.js'

export const findAll = async (req, res) => {
  try {
    const wallets = await findAllWallet();

    res.status(200).send(wallets);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export const create = async (req, res) => {
  try {
    const wallet = await createWallet(req.body);

    res.status(201).send(wallet);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params.id;

    const wallets = updateWallet(id, req.body);

    res.status(200).send({ message: 'Wallet has been updated.' });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}

export const del = async (req, res) => {
  try {
    const { id } = req.params.id;

    const wallets = deleteWallet(id);

    res.status(200).send({ message: 'Wallet has been deleted.' });
  } catch (error) {
    res.status(500).send({ message: error });
  }
}* /