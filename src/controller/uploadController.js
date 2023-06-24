import multer from 'multer';
import multerConfig from '../config/multer.js';

export const upload = (req, res) => {
  multer(multerConfig).array('files', 4)(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error uploading file' });
    }

    return res.status(200).send({ files: req.files });
  });
};