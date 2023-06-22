import { createDocumentos, deleteDocumentos, findAllDocumentos, findDocumentosById, findDocumentosByUser, updateDocumentos } from '../service/documentosService.js'

export const findAll = async (req, res) => {
  try {
    const documentos = await findAllDocumentos();

    res.status(200).send(documentos);
  } catch (err) {
    res.status(500).send({ message: err.toString() });
  }
}

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const documento = await findDocumentosById(id);

    res.status(200).send(documento);
  } catch (error) {
    res.status(500).send({ message: err.toString() });
  }
}
export const findByUser = async (req, res) => {
  try {
    const { id } = req.params;

    const documentos = await findDocumentosByUser(id);

    res.status(200).send(documentos);
  } catch (error) {
    res.status(500).send({ message: err.toString() });
  }
}
export const create = async (req, res) => {
  try {
    const documento = await createDocumentos(req.body);

    res.status(200).send(documento);
  } catch (error) {
    res.status(500).send({ message: err.toString() });
  }
}
export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const documento = await updateDocumentos(id, req.body);

    res.status(200).send(documento);
  } catch (error) {
    res.status(500).send({ message: err.toString() });
  }
}
export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const documento = await deleteDocumentos(id);

    res.status(200).send({ message: 'Documento has been deleted.' });
  } catch (error) {
    res.status(500).send({ message: err.toString() });
  }
}