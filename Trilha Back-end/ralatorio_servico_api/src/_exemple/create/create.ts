import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.ship.create({
  data: {
    name:  'Gabiru do Mar',
    owner: 'Gabiru ',
    mmsi: '1029',
    imo: '121522',
    port_register: 'Rio dos Gabirus',
    indicate_call: 'Tenho um problemas'
},

});

  console.log(result)
}
main();