import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.collaborators_role.createMany({
  data: [{
    id: '1',
    fk_collaborators:"1029",
    fk_role: "1010"
    
},{
  id: '2',
  fk_collaborators: "1029",
  fk_role: "1515",
  
},{
  id: '3',
  fk_collaborators: "9845",
  fk_role: "2222",
}],

});

  console.log(result)
}
main();