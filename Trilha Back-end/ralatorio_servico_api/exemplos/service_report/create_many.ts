import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
async function main() {
  const result =  await prisma.service_report.createMany({
    data: [{
      id: '1',
      category_service: "VDR",
      data_service: new Date(2023, 4,2),
      text: "Texto necessário pra ajudar o amiguinho que vai fazer VDR",
      fk_os: "OS008915-SV"
      
    },{
      id: '2',
      category_service: "VDR",
      data_service: new Date(2023, 3,8),
      text: "Texto necessário pra ajudar o amiguinho que vai fazer Cyscan",
      fk_os: "OS008922-SM"
  },{
      id: '3',
      category_service: "VDR",
      data_service: new Date(2024, 5,4),
      text: "Texto necessário pra ajudar o amiguinho que vai fazer Radas",
      fk_os: "OS008921-S"
  }],
    
  });
console.log(result);
}
main();