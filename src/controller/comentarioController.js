import { createComentario, deleteComentario, findAllComentario, findComentarioById, findComentarioByProfile, updateComentario } from '../service/comentarioService.js'

export const findAll = async (req, res) => {
  try {
    const comentarios = await findAllComentario();

    res.status(200).send(comentarios);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const comentario = await findComentarioById(id);

    res.status(200).send(comentario);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const findByProfile = async (req, res) => {
  try {
    const { profileId } = req.params;

    const comentario = await findComentarioByProfile(profileId);

    res.status(200).send(comentario);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const create = async (req, res) => {
  try {
    const comentario = await createComentario(req.body);

    res.status(201).send(comentario);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const comentario = await updateComentario(id, req.body);

    res.status(200).send({ message: 'Comentario has been updated.', comentario: comentario });
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const comentario = await deleteComentario(id, req.body);

    res.status(200).send({ message: 'Comentario has been deleted.' });
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}