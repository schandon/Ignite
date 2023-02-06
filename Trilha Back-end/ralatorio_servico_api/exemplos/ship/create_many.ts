import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.ship.createMany({
  data: [{
    name_vessel:  'Gabiru do Mar',
    owner: 'Gabiru ',
    mmsi: '1029',
    imo: '1222',
    flag_registry: 'Honduras',
    call_sign: 'Tenho um problemas'

},{
  name_vessel:  'Gabiru do Alado',
  owner: 'Francis Armelau',
  mmsi: '1010',
  imo: '1215',
  flag_registry: 'Brasil',
  call_sign: 'Tengo a probleminhas'
  
},{
  name_vessel:  'Gabiruzinho Estranho',
  owner: 'Genésio da Silva',
  mmsi: '9909',
  imo: '6777',
  flag_registry: 'Espanha',
  call_sign: 'I have a problem'
}],

});

  console.log(result)
}
main();