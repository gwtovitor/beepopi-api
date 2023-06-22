import { Documentos } from '../model/Documentos.js';

export const findAllDocumentos = () => Documentos.find();

export const findDocumentosById = (id) => Documentos.findById(id);

export const findDocumentosByUser = (id) => Documentos.find({ user: id });

export const createDocumentos = (documento) => Documentos.create(documento);

export const updateDocumentos = (id, documento) => Documentos.findByIdAndUpdate(id, documento);

export const deleteDocumentos = (id) => Documentos.findByIdAndDelete(id);