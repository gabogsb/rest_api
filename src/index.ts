import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';


import { router } from './router';


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    const port = 3001;
    app.listen(port, () => {
      console.log(`🚀 Server Running in http://localhost:${port}`);
    });

  })
  .catch(() => console.log('erro ao conectar ao mongo'));
