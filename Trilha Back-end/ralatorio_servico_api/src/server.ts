import express from 'express';

import {collaboratorRoutes} from './routes/collaborators.routes';
import { roleRoutes} from './routes/role.routes';

const app = express();

app.use(express.json());

app.get( '/' , (request, response) => {
  return response.json({ message: 'Coe Galerinha'})
})

app.use("/collaborators",collaboratorRoutes);
app.use("/role",roleRoutes);

app.listen(3003, () => console.log('Server rodando em 3003')); 