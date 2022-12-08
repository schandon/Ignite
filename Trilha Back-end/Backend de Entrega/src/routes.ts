import { Router } from "express";
import { CreateCelularController } from "./modules/celular/useCases/createCelular/CreateCelularControlles";
import { CreateColaboradorController } from "./modules/colaborador/useCases/createColaborador/CreateColaboradorController";

const routes = Router();

const createCelularController = new CreateCelularController();
const createColaboradorController = new CreateColaboradorController();

routes.post("/celular/", createCelularController.handle);
routes.post("/colaborador/", createColaboradorController.handle);


export { routes }