import { Request, Response } from "express";
import { CreataClienteUseCase } from "./CreateClienteUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response){
    const { user_domain, password } = request.body;
    
    const creataClienteUseCase = new CreataClienteUseCase();
    const result  =  await creataClienteUseCase.execute({
      user_domain,
      password
    });

    return response.json(result);
  
  }
}