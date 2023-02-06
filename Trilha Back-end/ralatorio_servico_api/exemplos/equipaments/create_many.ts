import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.equipaments.createMany({
  data: [{
    id: '1',
    date_manufacture: new Date(2012, 1,1),
    name: "UNIDADE DO PAINEL PRINCIPAL p/ JSS-2150",
    serial_number: "CCK-3775",
    quantity: 1,


  },{
    id: '2',
    date_manufacture: new Date(2012, 1,1),
    name: "7ZYNA4007 - VENTOINHA DE PSU p/ JAN-7200",
    serial_number: "7ZYNA4007",
    quantity: 1,
  
},{
    id: '3',
    date_manufacture: new Date(2012, 1,1),
    name: "NBB-389-1 - BATERIA DE LÍTIO 9V p/ JHS-7/JHS-7E",
    serial_number: "NBB-389-1",
    quantity: 1,
}],

});

  console.log(result)
}
main();