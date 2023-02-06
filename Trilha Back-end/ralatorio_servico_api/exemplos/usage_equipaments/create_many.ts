import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.usage_equipaments.createMany({
    data: [{
      id: '1',
      serial_number:"JRCRJ45",
      description: "Conector RJ45",
      quantity: 10,
      value: 10,
      total: 100,
      fk_service_report:"1"      
  },{
      id: '2',
      serial_number: "CBG-2692-B",
      description: "CBG-2692-B - FONTE DE ENERGIA p/ JSS-296",
      quantity: 1,
      value: 100,
      total: 100,
      fk_service_report: "3"
},{
      id: '3',
      serial_number: "NBB-389-1",
      description: "NBB-389-1 - BATERIA DE LÍTIO 9V p/ JHS-7/JHS-7E",
      quantity: 2,
      value: 20,
      total: 40,
      fk_service_report: "3"
},{
      id: '4',
      serial_number:"JRCRJ45",
      description: "Conector RJ45",
      quantity: 10,
      value: 10,
      total: 100,
      fk_service_report:"1"      
},{
      id: '5',
      serial_number:"JRCRJ45",
      description: "Conector RJ45",
      quantity: 10,
      value: 10,
      total: 100,
      fk_service_report:"1"      
},{
      id: '6',
      serial_number:"JRCRJ45",
      description: "Conector RJ45",
      quantity: 10,
      value: 10,
      total: 100,
      fk_service_report:"1"      
},{
      id: '7',
      serial_number:"JRCRJ45",
      description: "Conector RJ45",
      quantity: 10,
      value: 10,
      total: 100,
      fk_service_report:"1"      
},
],

});

  console.log(result)
}
main();