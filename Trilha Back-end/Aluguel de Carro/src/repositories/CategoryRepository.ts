import { Category } from '../modules/cars/model/Category';

interface ICreateCategoryDTO{
  name: string;
  matricula: string;
}

class CategorysRepository{
  private collaborators: Category[]

  constructor(){
    this.collaborators = [];
  }

  create({name, matricula }: ICreateCategoryDTO){
    const collaborator = new Category()

    Object.assign(collaborator, {
      name,
      matricula,
      createdAt: new Date()
  });

  this.collaborators.push(collaborator);
  }

  list(): Category[] {
    return this.collaborators;
  }
  findByMatricula(matricula: string): Category{
      const collaborator = this.collaborators.find((collaborators)=> collaborators.matricula === matricula);
      return collaborator;
  }
}

export { CategorysRepository };