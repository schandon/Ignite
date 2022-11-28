import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.materials_test.createMany({
  data: [{
    type:"EPIRB TESTER",
    model: "BT MINI",
    serial_number: "181034",
    fk_service_report:"1df2b80b-ed51-4989-ac93-fbadde2c28bd",
  },{
    type:"AIS TESTER",
    model: "MUSSON M1",
    serial_number: "12916",
    fk_service_report:"1df2b80b-ed51-4989-ac93-fbadde2c28bd",
  
},{
    type:"BEACON TESTER",
    model: "SEACOM",
    serial_number: "SR1241",
    fk_service_report:"1df2b80b-ed51-4989-ac93-fbadde2c28bd",
},{
  type:"FREQ. HOMIS",
  model: "HOMIS",
  serial_number: "I261312",
  fk_service_report:"1d92d804-ab3a-4d5a-bfc2-028355552f96",
},{
  type:"TRON",
  model: "UNIDEC",
  serial_number: "201BC01197",
  fk_service_report:"1d92d804-ab3a-4d5a-bfc2-028355552f96",
},{
  type:"MUSSON MARINE",
  model: "M1",
  serial_number: "12916",
  fk_service_report:"1d92d804-ab3a-4d5a-bfc2-028355552f96",
},{
  type:"WATER BIRD E.",
  model: "43",
  serial_number: "203325",
  fk_service_report:"1d92d804-ab3a-4d5a-bfc2-028355552f96",
}],

});

  console.log(result)
}
main();