import { CreateCollaboratorUseCase } from "./CreateCollaboratorUseCase";
import { CollaboratorRepository } from "../../repositories/CollaboratorsRepository";
import { CreateCollaboratorController } from "./CreateCollaboratorController";

const collaboratorRepository = new CollaboratorRepository();

const createCollaboratorUseCase = new CreateCollaboratorUseCase(collaboratorRepository)

const createCollaboratorController = new CreateCollaboratorController(createCollaboratorUseCase);


export { createCollaboratorController };