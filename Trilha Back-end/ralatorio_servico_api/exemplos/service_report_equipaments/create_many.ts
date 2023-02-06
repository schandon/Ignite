import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.service_report_equipaments.createMany({
  data: [{
    id: '1',
    fk_equipaments: "2",
    fk_service_report: "3",

  },
  {
    id: '2',
    fk_equipaments: "3",
    fk_service_report: "2",
  },
  {
    id: '3',
    fk_equipaments: "3",
    fk_service_report: "3",
  
}],

});

  console.log(result)
}
main();