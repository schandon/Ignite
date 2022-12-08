import { Request, Response } from "express";
import { CreateCelularUseCase } from "./CreateCelularUseCase";
import { v4 as uuidv4 } from 'uuid'

export class CreateCelularController {
  async handle(request: Request, response: Response){
    const { model, no_, so, adm_aproved } = request.body;
    
    const createCelularUseCase = new CreateCelularUseCase();

    const result  =  await createCelularUseCase.execute({
      id: uuidv4(),
      model,
      no_,
      so,
      adm_aproved: true
    });

    return response.json(result);
  
  }
}
