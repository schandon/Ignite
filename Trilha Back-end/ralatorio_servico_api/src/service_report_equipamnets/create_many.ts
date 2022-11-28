import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.role.createMany({
  data: [{
    description: "Tecnico de Eletronica",
    id: "1010",

  },{
    description: "Tecnico de TI",
    id: "2222",
  
},{
  description: "Tecnico de Nautica",
    id: "1515",
}],

});

  console.log(result)
}
main();