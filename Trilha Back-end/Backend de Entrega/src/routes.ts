import { Router } from "express";
import { CreateCelularController } from "./_exemplos/celular/useCases/createCelular/CreateCelularControlles";

const routes = Router();

const createCelularController = new CreateCelularController();

routes.post("/celular/", createCelularController.handle);


export { routes }