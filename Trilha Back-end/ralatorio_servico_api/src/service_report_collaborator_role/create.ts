import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  const result =  await prisma.service_report_collaborator_role.createMany({
    data: [{  
    fk_collaborators:"1029",
    fk_role:"1010",
    fk_service_report: "OS008915-SV"

  },{
    
    fk_collaborators:"1000",
    fk_role:"2222",
    fk_service_report: "OS008922-SM"
  
},{
    
    fk_collaborators:"9845",
    fk_role:"1010",
    fk_service_report: "OS008921-S"
}]
})
console.log(result);
}

main()