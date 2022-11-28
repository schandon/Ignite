import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.collaborators.createMany({
  data: [{
    matricula: "4020",
    nome: "Alexandre Pereira",
    
},{
  matricula: "1029",
  nome: "Francis Armelau",
  
},{
  matricula: "9845",
  nome: "Genesis Mendonça",
}],

});

  console.log(result)
}
main();