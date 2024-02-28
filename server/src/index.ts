import express from 'express';
import cors from 'cors';
const app = express();

import { router } from './router';

const port: number = 3000;

// cors
app.use(cors());

// json
app.use(express.json());

// router
app.use(router);

app.listen(port, () => {
  `listening on ${port}`;
});
