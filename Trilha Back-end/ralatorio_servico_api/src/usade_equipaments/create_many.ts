import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.materials_usage.createMany({
  data: [{
      serial_number:"JRCRJ45",
      description: "Conector RJ45",
      quantity: 10,
      value: 10,
      total: 100,
      fk_service_report:"18b50b28-0bd6-462e-9677-e5dc0301bd73"

      
  },{
      serial_number: "CBG-2692-B",
      description: "CBG-2692-B - FONTE DE ENERGIA p/ JSS-296",
      quantity: 1,
      value: 100,
      total: 100,
      fk_service_report: "1d92d804-ab3a-4d5a-bfc2-028355552f96"
  
},{
      serial_number: "NBB-389-1",
      description: "NBB-389-1 - BATERIA DE LÍTIO 9V p/ JHS-7/JHS-7E",
      quantity: 2,
      value: 20,
      total: 40,
      fk_service_report: "1df2b80b-ed51-4989-ac93-fbadde2c28bd"
}],

});

  console.log(result)
}
main();