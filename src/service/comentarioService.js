import Comentario from '../model/Comentario.js';

const findAllComentario = () => Comentario.findAll();
const findComentarioById = (id) => Comentario.findAll();
const findComentarioByProfile = (profileId) => Comentario.find({ perfil: profileId });
const createComentario = (comentario) => Comentario.create(comentario);
const updateComentario = (id, comentario) => Comentario.findByIdAndUpdate(id, comentario);
const deleteComentario = () => Comentario.findByIdAndDelete(id);