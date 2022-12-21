import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  const result =  await prisma.service_report_collaborator_role.createMany({
    data: [{  
        fk_collaborators:"1029",
        fk_role:"1010",
        fk_service_report: "040f8564-474b-461e-b4c6-5089f2fed1f3"

      },{ 
        fk_collaborators:"1000",
        fk_role:"2222",
        fk_service_report: "42b9cdf7-7a49-41f0-b47f-45e623cd1e22"
      
    },{
        fk_collaborators:"9845",
        fk_role:"1515",
        fk_service_report: "45826e58-608b-489b-a237-3a0394c6ca35"
    }],
})
console.log(result);
}

main()