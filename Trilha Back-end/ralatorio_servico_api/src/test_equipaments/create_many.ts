import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.test_equipaments.createMany({
  data: [{
    type:"EPIRB TESTER",
    model: "BT MINI",
    serial_number: "181034",
    fk_service_report:"040f8564-474b-461e-b4c6-5089f2fed1f3",
  },{
    type:"AIS TESTER",
    model: "MUSSON M1",
    serial_number: "12916",
    fk_service_report:"040f8564-474b-461e-b4c6-5089f2fed1f3",
  
},{
    type:"BEACON TESTER",
    model: "SEACOM",
    serial_number: "SR1241",
    fk_service_report:"45826e58-608b-489b-a237-3a0394c6ca35",
},{
  type:"FREQ. HOMIS",
  model: "HOMIS",
  serial_number: "I261312",
  fk_service_report:"45826e58-608b-489b-a237-3a0394c6ca35",
},{
  type:"TRON",
  model: "UNIDEC",
  serial_number: "201BC01197",
  fk_service_report:"42b9cdf7-7a49-41f0-b47f-45e623cd1e22",
},{
  type:"MUSSON MARINE",
  model: "M1",
  serial_number: "12916",
  fk_service_report:"42b9cdf7-7a49-41f0-b47f-45e623cd1e22",
},{
  type:"WATER BIRD E.",
  model: "43",
  serial_number: "203325",
  fk_service_report:"040f8564-474b-461e-b4c6-5089f2fed1f3",
}],

});

  console.log(result)
}
main();