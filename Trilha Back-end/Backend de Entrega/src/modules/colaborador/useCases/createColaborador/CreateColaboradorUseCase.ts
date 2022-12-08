import { prisma } from '../../../../database/prismaClient';

interface ICreateColaborador {
  id: string;
  email: string;
  user_domain:string;
  full_name: string;
  acess_server: string;
  perm_acess_internet: boolean;
  perm_install_software: boolean;
  office: string;
}

export class CreateColaboradorUseCase{
   async execute({id, 
                  email,
                  user_domain,
                  full_name,
                  acess_server,
                  perm_acess_internet,
                  perm_install_software,
                  office}:ICreateColaborador) {
    
    const colaboradorExist = await prisma.colaborador.findFirst({
      where: {
        user_domain
      }
    })

    if(colaboradorExist){
      throw new Error(`Colaborador already exists`);
    }

    await prisma.colaborador.create({
      data:{
        id, 
        email,
        user_domain,
        full_name,
        acess_server,
        perm_acess_internet,
        perm_install_software,
        office

      }
    })
    
   }
}