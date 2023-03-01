import Profile from "../model/Profile.js";

const findAll = () => Profile.find();

const findById = (id) => Profile.findById(id);

const find = (idUsuario) => Profile.findOne(idUsuario);

const create = (profile) => Profile.create(profile);

export default {
  findAll,
  findById,
  find,
  create
};