import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt"

interface ICreateClient{
	user_domain: string
	password: string 
} 

export class CreataClienteUseCase{
	//validar se cliente existe
 async execute({password, user_domain}: ICreateClient) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        user_domain:{
          mode: "insensitive",
        }
      }
  })

  if(clientExist){
      throw new Error("User already exists")
  } 

  //Criptografar a senha
  const hashPassword = await hash(password, 10);
  
  //Salvar o cliente
  await prisma.clients.create({
    data:{
      user_domain,
      hashPassword
    }
  }, hashPassword)

 }

}