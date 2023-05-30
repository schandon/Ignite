import {CategoryRepository} from '../../repositories/CategoryRepository';

interface IRquest{
	name: string;
	description: string;
} 

class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository){}
  execute ({ description, name}: IRquest):void {
    
    const categoryAlreadyExists = this.categoryRepository.findByName(name);
  
  if(categoryAlreadyExists){
    throw new Error("Category Alredy Exists!");
  }

  this.categoryRepository.create({name, description});
  }

}

export { CreateCategoryUseCase}