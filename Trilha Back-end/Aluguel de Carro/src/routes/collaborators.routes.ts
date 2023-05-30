import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categorysRoutes = Router()
const categorysRepository = new CategoryRepository();


categorysRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
})
categorysRoutes.get("/", (request, response) => {
  const all = categorysRepository.list();

  return response.json(all);
})

export {categorysRoutes};