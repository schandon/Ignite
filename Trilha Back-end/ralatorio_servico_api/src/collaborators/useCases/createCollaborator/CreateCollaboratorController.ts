import { Request, Response } from 'express';

import { CreateCollaboratorUseCase } from '../createCollaborator/CreateCollaboratorUseCase';

class CreateCollaboratorController{
  constructor(private createCollaboratorUseCase: CreateCollaboratorUseCase) {}

  handle(request: Request, response: Response): Response {
    const { matricula, name} = request.body;
  
    this.createCollaboratorUseCase.execute({name, matricula})
    
    return response.status(201).send()
  }
}

export { CreateCollaboratorController }