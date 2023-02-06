import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.test_equipaments.createMany({
  data: [{
    id: '1',
    type:"EPIRB TESTER",
    model: "BT MINI",
    serial_number: "181034",
    fk_service_report:"1",
  },{
    id: '2',
    type:"AIS TESTER",
    model: "MUSSON M1",
    serial_number: "12916",
    fk_service_report:"1",
  
},{
    id: '3',
    type:"BEACON TESTER",
    model: "SEACOM",
    serial_number: "SR1241",
    fk_service_report:"2",
},{
  id: '4',
  type:"FREQ. HOMIS",
  model: "HOMIS",
  serial_number: "I261312",
  fk_service_report:"2",
},{
  id: '5',
  type:"TRON",
  model: "UNIDEC",
  serial_number: "201BC01197",
  fk_service_report:"3",
},{
  id: '6',
  type:"MUSSON MARINE 533",
  model: "M15",
  serial_number: "129516",
  fk_service_report:"3",
},{
  id: '7',
  type:"WATER BIRD E4.",
  model: "4322",
  serial_number: "2033235",
  fk_service_report:"1",
}],

});

  console.log(result)
}
main();