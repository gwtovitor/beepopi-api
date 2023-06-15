import { Vert } from '../model/Vert.js';

export const findAllVert = () => Vert.find();

export const findVertById = (id) => Vert.findById(id);

export const findVertByUser = (id) => Vert.find({ user: id });

export const createVert = (vert) => Vert.create(vert);

export const updateVert = (id, vert) => Vert.findByIdAndUpdate(id, vert);

export const deleteVert = (id) => Vert.findByIdAndDelete(id);