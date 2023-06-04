import { Category } from '../../model/Category';
import { ICategoryRepository, ICreateCategoryDTO } from '../ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
  private category: Category[]

  private static INSTANCE: CategoryRepository;

  private constructor(){
    this.category = [];
  }

  public static getInstance(): CategoryRepository{
    if(!CategoryRepository.INSTANCE){
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  create({name, description }: ICreateCategoryDTO):void{
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      createdAt: new Date()
  });

  this.category.push(category);
  }

  list(): Category[] {
    return this.category;
  }
  findByName(name: string): Category{
      const category = this.category.find((category)=> category.name === name);
      return category;
  }
}

export { CategoryRepository };