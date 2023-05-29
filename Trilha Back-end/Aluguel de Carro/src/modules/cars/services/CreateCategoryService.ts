import {CategoryRepository} from '../repositories/CategoryRepository';

interface IRquest{
	name: string;
	description: string;
} 

class CreateCategoryService {
  constructor(private categorysRepository: CategoryRepository){}
  execute ({ description, name}: IRquest):void {
    
    const categoryAlreadyExists = this.categorysRepository.findByMatricula(description);
  
  if(categoryAlreadyExists){
    throw new Error("Category Alredy Exists!");
  }

  this.categorysRepository.create({name, description});
  }

}

export { CreateCategoryService}