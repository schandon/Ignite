import {CategorysRepository} from '../repositories/CategoryRepository';

interface IRquest{
	name: string;
	matricula: string;
} 

class CreateCategoryService {
  constructor(private categorysRepository: CategorysRepository){}
  execute ({ matricula, name}: IRquest):void {
    
    const collaboratorAlreadyExists = this.categorysRepository.findByMatricula(matricula);
  
  if(collaboratorAlreadyExists){
    throw new Error("Colaborador já cadastrado!");
  }

  this.categorysRepository.create({name, matricula});
  }

}

export { CreateCategoryService}