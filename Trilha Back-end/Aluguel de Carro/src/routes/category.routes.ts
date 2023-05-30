import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoryRoutes = Router()
const categoryRepository = new CategoryRepository();


categoryRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
})
categoryRoutes.get("/", (request, response) => {
  
})

export {categoryRoutes};