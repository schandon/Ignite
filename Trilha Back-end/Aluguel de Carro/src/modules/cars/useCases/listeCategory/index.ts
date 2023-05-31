import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriesController"
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


const categoryRepository = CategoryRepository.getInstance();
const listCategoryUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(listCategoryUseCase);

export { listCategoriesController };