import { Collaborator } from "../model/Collaborator";
import { ICollaboratorRepository, ICreateCollaboratorDTO } from "./ICollaboratorsRepository";



class CollaboratorRepository implements ICollaboratorRepository{
	private collaborators: Collaborator[];
  
  constructor() {
		this.collaborators = [];
	}
  
  create({ name, matricula }: ICreateCollaboratorDTO): void {
    const collaborator = new Collaborator();
    
    Object.assign(collaborator, { name, matricula, create_at: new Date(), });
   
    this.collaborators.push(collaborator);
  }

  findByMatricula(matricula): Collaborator {
    const collaborator = this.collaborators.find((collaborator)=> collaborator.matricula === matricula);

    return collaborator;
  }
}

export { CollaboratorRepository }