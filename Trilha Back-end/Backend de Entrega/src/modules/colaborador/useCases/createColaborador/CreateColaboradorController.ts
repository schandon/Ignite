import { Request, Response } from "express";
import { CreateColaboradorUseCase } from "./CreateColaboradorUseCase";
import { v4 as uuidv4 } from 'uuid'

export class CreateColaboradorController {
  async handle(request: Request, response: Response){
    const {  email, user_domain, full_name, acess_server, office } = request.body;
    
    const createColaboradorUseCase = new CreateColaboradorUseCase();

    const result  =  await createColaboradorUseCase.execute({
      id: uuidv4(),
      email,
      user_domain,
      full_name,
      acess_server,
      perm_acess_internet: true,
      perm_install_software: true,
      office
    });

    return response.json(result);
  
  }
}

