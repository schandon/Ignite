import { Router } from "express";
import { Category } from "../modules/cars/model/Category";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categorysRoutes = Router()
const categorysRepository = new CategoryRepository();


categorysRoutes.post("/", (request, response) => {
  const { description, name} = request.body;

  const createCategoryService = new CreateCategoryService(categorysRepository);

  createCategoryService.execute({name, description})
  
  return response.status(201).send()
})
categorysRoutes.get("/", (request, response) => {
  const all = categorysRepository.list();

  return response.json(all);
})

export {categorysRoutes};