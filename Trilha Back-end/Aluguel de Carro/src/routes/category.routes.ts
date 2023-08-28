import { Router } from "express";
import Multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listeCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoryRoutes = Router()
const uplaods = Multer({dest: './tmp'});


categoryRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
})
categoryRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request,response);
})

categoryRoutes.post("/import", uplaods.single("file"),(request, response) => {
  return importCategoryController.handle(request,response);
});

export {categoryRoutes};