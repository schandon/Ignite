import express from 'express';

import { categoryRoutes } from './routes/category.routes';
import { specificationRoutes } from './routes/specification.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoryRoutes);
app.use('/specifications', specificationRoutes);

app.listen(3003, () => console.log('Server rodando em 3003'));