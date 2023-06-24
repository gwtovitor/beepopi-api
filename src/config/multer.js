import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import crypto from 'crypto';
import multerS3 from 'multer-s3'
import aws from 'aws-sdk';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = dirname(currentFilePath);
const uploadDirectory = resolve(currentDirectory, '..', '..', 'tpm', 'uploads');
const storageTypes = {
    local:  multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, uploadDirectory);
      },
      filename: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if (err) cb(err);
          file.key = `${hash.toString('hex')}-${file.originalname}`;
          cb(null, file.key);
        });
      },
    }),
    s3: multerS3({
      s3: new aws.S3(),
      bucket: 'criminalclub-test',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      key: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if (err) cb(err);
          const fileName = `${hash.toString('hex')}-${file.originalname}`;
          cb(null, fileName);
        });
      }
    })
}
const multerConfig = {
  dest: uploadDirectory,
  storage: storageTypes['s3'],
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'video/mp4','image/jpg','image/wepm' ,'image/pjpeg', 'image/png', 'image/gif'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
};

export default multerConfig;
