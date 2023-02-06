import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
async function main() {
const result =  await prisma.service_order.createMany({
  data: [{
    os: "OS008921-S", 
    reported_problems:"O problema que ums de nossos tecnicos foi resolver",
    finished: false,
    date_os: new Date(2021, 10,30),
    fk_ship_imo: '1222',
    fk_ship_mmsi: '1029'
  },{
    os: "OS008922-SM", 
    reported_problems:"O problema que ums de nossos tecnicos foi resolver",
    finished: true,
    date_os: new Date(2022, 11,20),
    fk_ship_imo: '1222',
    fk_ship_mmsi: '1029'
    
},{
    os: "OS008915-SV", 
    reported_problems:"O problema que ums de nossos tecnicos foi resolver",
    finished: true,
    date_os: new Date(2015, 9,10),
    fk_ship_imo: '1222',
    fk_ship_mmsi: '1029'
  },{
    os: "OS008916-SV", 
    reported_problems:"O problema que ums de nossos tecnicos foi resolver",
    finished: true,
    date_os: new Date(2016, 10,10),
    fk_ship_imo: "1215",
    fk_ship_mmsi: "1010"
},],

});
console.log(result);

}
main();