import { ICollaboratorRepository } from '../../repositories/ICollaboratorsRepository'

interface IRquest{
	name: string;
	matricula: string;
} 

class CreateCollaboratorUseCase {
  constructor(private collaboratorsRepository: ICollaboratorRepository){}
  execute ({ matricula, name}: IRquest):void {
    
    const collaboratorAlreadyExists = this.collaboratorsRepository.findByMatricula(matricula);  
  if(collaboratorAlreadyExists){
    throw new Error("Colaborador já cadastrado!");
  }

  this.collaboratorsRepository.create({name, matricula });
  }
}

export { CreateCollaboratorUseCase };