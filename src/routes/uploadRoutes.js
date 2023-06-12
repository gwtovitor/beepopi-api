import express from 'express';
import { upload } from '../controller/uploadController.js';

export const uploadRoutes = express.Router();

uploadRoutes.post('/', upload);