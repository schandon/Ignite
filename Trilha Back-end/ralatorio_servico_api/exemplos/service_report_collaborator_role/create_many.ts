import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  const result =  await prisma.service_report_collaborator_role.createMany({
    data: [{  
        id: '4',
        fk_service_report: "1",
        fk_collaborators: '4020',
        fk_role: '1010'

      },{ 
        id: '5',
        fk_service_report: "2",
        fk_collaborators: "1029",
        fk_role: '1010'
      
    },{
        id: '3',
        fk_service_report: "2",
        fk_collaborators: "4020",
        fk_role: '1515',
   }]
})
console.log(result);
}

main();