import { Category } from "../model/Category";

interface ICreateCategoryDTO{
  name: string;
  description: string;
}

interface ICategoryRepository {

  create({ name, description }: ICreateCategoryDTO):void;
  findByName(name: string): Category;
  list();
}

export { ICategoryRepository, ICreateCategoryDTO };