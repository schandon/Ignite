import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.celular.createMany({
  data: [{},]})
console.log(result);
}

main();