import { Criador } from "../model/Criador.js";

export function findAllCriador() {
  return Criador.find();
}

export function findCriadorById(id) {
  return Criador.findById(id);
}

export function findCriadorByUser(idUsuario) {
  return Criador.findOne(idUsuario);
}

export function createCriador(criador) {
  return Criador.create(criador);
}