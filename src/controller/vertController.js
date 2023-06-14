import { createVert, deleteVert, findAllVert, findVertById, findVertByUser, updateVert } from '../service/vertService.js'

export const findAll = async (req, res) => {
  try {
    const verts = await findAllVert();

    res.status(200).send(verts);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const vert = await findVertById(id);

    res.status(200).send(vert);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const findByUser = async (req, res) => {
  try {
    const { id } = req.params;

    const verts = await findVertByUser(id);

    res.status(200).send(verts);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const create = async (req, res) => {
  try {
    const vert = await createVert(req.body);

    res.status(201).send({ message: 'Vert has been created.', vert: vert });
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const vert = await updateVert(id, req.body);

    res.status(200).send({ message: 'Vert has been updated', vert: vert });
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const vert = await deleteVert(id);

    res.status(200).send({ message: 'Vert has been removed' });
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}