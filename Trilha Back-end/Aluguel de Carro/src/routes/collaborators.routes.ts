import { Router } from "express";
import { Category } from "../modules/cars/model/Category";
import { CategorysRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const CategorysRoutes = Router()
const categorysRepository = new CategorysRepository();


CategorysRoutes.post("/", (request, response) => {
  const { matricula, name} = request.body;

  const createCategoryService = new CreateCategoryService(categorysRepository);

  createCategoryService.execute({name, matricula})
  
  return response.status(201).send()
})
CategorysRoutes.get("/", (request, response) => {
  const all = categorysRepository.list();

  return response.json(all);
})

export {CategorysRoutes};