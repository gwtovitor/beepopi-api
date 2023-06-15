import { Comentario } from '../model/Comentario.js';

export const findAllComentario = () => Comentario.find();

export const findComentarioById = (id) => Comentario.findById(id);

export const findComentarioByProfile = (profileId) => Comentario.find({ perfil: profileId });

export const createComentario = (comentario) => Comentario.create(comentario);

export const updateComentario = (id, comentario) => Comentario.findByIdAndUpdate(id, comentario);

export const deleteComentario = (id) => Comentario.findByIdAndRemove(id);