// import 'dotenv/config';
import express from 'express';
import cors from 'cors';
require('dotenv').config();

import { router } from './router';
const port: number = 3000;

const app = express();

// cors
app.use(cors());

// json
app.use(express.json());

// router
app.use(router);

app.listen(port, () => {
  `listening on ${port}`;
});
