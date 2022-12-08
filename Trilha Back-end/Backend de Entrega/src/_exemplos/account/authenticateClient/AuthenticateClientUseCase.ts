import { prisma } from "../../../database/prismaClient"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"


interface IAuthenticateClient{
  username: string;
  password: string;
}

export class AuthenticateClientUseCase{
  async execute({username, password}: IAuthenticateClient){
    //receber user_domain, password

    //verificar se cadastrado
    const client = await prisma.client.findFirst({
      where:{
          username,
      }
    })

    if(!client){
      throw new Error('Username or Password invalid!!');
    }

    // verificar se senha e usuario corresponde
    const passwordMatch = await compare(password, client.password);
    
    if(!passwordMatch){
      throw new Error('Username or Password invalid!!');
    }
    
      //gerar token
      const token = sign({username}, "d3f541bf77de408fa85a9bec06195452", {
        subject: client.id,
        expiresIn: "1d",
      });

      return{
        username,
        token
      };
      

  }
}