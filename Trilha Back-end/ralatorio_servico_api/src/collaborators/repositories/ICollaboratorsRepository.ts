import { Collaborator } from "../model/Collaborator";

interface ICreateCollaboratorDTO{
  matricula: string;
  name: string;
}

interface ICollaboratorRepository {
  create({name, matricula}:ICreateCollaboratorDTO):void;
  findByMatricula(matricula:string): Collaborator;
}

export { ICreateCollaboratorDTO, ICollaboratorRepository }