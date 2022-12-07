import { prisma } from '../../../../database/prismaClient';

interface ICreateCelular {
    id: string;
    model: string;
    no_: string;
    so: string;
    adm_aproved: boolean;
}


export class CreateCelularUseCase{
    async execute({id,model, no_, so, adm_aproved}:ICreateCelular) {
    const celularExist = await prisma.celular.findFirst({
        where: {
            no_:{
                mode:"insensitive",
            }
            }
        })
    
        if(celularExist){
            throw new Error('Celular already exists')
        }
        

        await prisma.celular.create({
            data:{
                id,
                model,
                no_,
                so,
                adm_aproved: true,
            }
    })}
}
