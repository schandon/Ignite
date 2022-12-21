import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
async function main() {
  const result =  await prisma.service_report.createMany({
    data: [{
      category_service: "VDR",
      data_service: new Date(2022, 4,5),
      text: "Texto necessário pra ajudar o amiguinho que vai fazer VDR",
      
    },{
      category_service: "Cyscan",
      data_service: new Date(2022, 10,20),
      text: "Texto necessário pra ajudar o amiguinho que vai fazer Cyscan",
    
  },{
      category_service: "Radar",
      data_service: new Date(2021,12,20),
      text: "Texto necessário pra ajudar o amiguinho que vai fazer Radas",
  }],
    
  });
console.log(result);
}
main();