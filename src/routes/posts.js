import multer from 'multer';
import multerConfig from '../config/multer.js';
import { Router } from 'express';

const routes = Router();

export function postTeste(req, res) {
  multer(multerConfig).single('file')(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error uploading file' });
    }

    console.log(req.file);
    return res.json({ hello: 'Rocket' });
  });
}

export default routes;
