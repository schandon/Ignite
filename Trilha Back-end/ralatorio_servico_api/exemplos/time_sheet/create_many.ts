import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.time_sheet.createMany({
  data: [{
      id: '1',
      men:2,
      leave_shop: "09:00:00",
      arrive_job: "10:10:00",
      leave_job: "17:00:00",
      arrive_shop: "23:00:00",
      fk_service_report: "3"
      
  },{
      id: '2',
      men:2,
      leave_shop: "07:00:00",
      arrive_job: "10:10:00",
      leave_job: "14:00:00",
      arrive_shop: "20:00:00",
      fk_service_report: "2"
  },{
      id: '3',
      men:2,
      leave_shop: "04:00:00",
      arrive_job: "07:10:00",
      leave_job: "12:00:00",
      arrive_shop: "23:00:00",
      fk_service_report: "1"
    }],

});

  console.log(result)
}
main();