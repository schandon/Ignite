import express from 'express';
import swaggerUi from "swagger-ui-express";

import { routes } from "./routes";
import swaggerFile from "./swagger.json";

import  "./databse";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);


app.listen(3003, () => console.log('Server rodando em 3003'));