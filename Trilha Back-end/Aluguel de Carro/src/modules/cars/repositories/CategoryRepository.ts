import { Category } from '../model/Category';

interface ICreateCategoryDTO{
  name: string;
  description: string;
}

class CategoryRepository{
  private category: Category[]

  constructor(){
    this.category = [];
  }

  create({name, description }: ICreateCategoryDTO){
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
  findByMatricula(matricula: string): Category{
      const collaborator = this.category.find((collaborators)=> collaborator.description === matricula);
      return collaborator;
  }
}

export { CategoryRepository };