import { findAllCriador } from '../service/criadorService.js';

export async function findAll(req, res) {
  try {
    const criadores = await findAllCriador();

    res.send(criadores);
  } catch (error) {

  }
}