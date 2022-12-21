import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.service_report_equipaments.createMany({
  data: [{
    fk_equipaments: "1350e462-9d5d-4a02-a1bd-8a6a57eb35ee",
    fk_service_report: "040f8564-474b-461e-b4c6-5089f2fed1f3",

  },
  {
    fk_equipaments: "a49b4a01-bb20-43e2-95c1-f691e32f3834",
    fk_service_report: "42b9cdf7-7a49-41f0-b47f-45e623cd1e22",
  },
  {
    fk_equipaments: "c66bc525-6e43-41c2-a7fd-14f16d9c3345",
    fk_service_report: "45826e58-608b-489b-a237-3a0394c6ca35",
  
}],

});

  console.log(result)
}
main();