import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  const result = await prisma.ship.findMany({
    where:{
      name: {
        startsWith: "Curso",	
      }
    },
  });

  console.log(result)
}
main();