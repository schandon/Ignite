import { Request, Response } from "express"
import { CreateSpecificationUseCase} from "../createSpecification/CreateSpecificationUseCase";


class CreateSpecificationsController{
  constructor(private createSpecificationUseCase:CreateSpecificationUseCase){}

  handle(request: Request, response: Response): Response {
    const { description, name} = request.body;

    this.createSpecificationUseCase.execute({name, description})
    
    return response.status(201).send()
  }
  
}

export {CreateSpecificationsController}