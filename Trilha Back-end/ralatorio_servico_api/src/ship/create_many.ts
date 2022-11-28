import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.ship.createMany({
  data: [{
    name:  'Gabiru do Mar',
    owner: 'Gabiru ',
    mmsi: '1029',
    imo: '1222',
    port_register: 'Rio dos Gabirus',
    indicate_call: 'Tenho um problemas'
},{
  name:  'Gabiru do Alado',
  owner: 'Francis Armelau',
  mmsi: '1010',
  imo: '1215',
  port_register: 'Gabiru das Ostras',
  indicate_call: 'Tengo a probleminhas'
},{
  name:  'Gabiruzinho Estranho',
  owner: 'Genésio da Silva',
  mmsi: '9909',
  imo: '6777',
  port_register: 'Rio das Filtsao',
  indicate_call: 'I have a problem'
}],

});

  console.log(result)
}
main();