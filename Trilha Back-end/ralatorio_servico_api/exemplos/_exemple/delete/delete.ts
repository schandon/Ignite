import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  const result = await prisma.ship.delete({
    where:{
      id: '868377b0-c1c0-4871-9cc2-d7d55589fca6',
      }
  
  });

  console.log(result)
}
main();