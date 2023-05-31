import express from 'express';

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);


app.listen(3003, () => console.log('Server rodando em 3003'));