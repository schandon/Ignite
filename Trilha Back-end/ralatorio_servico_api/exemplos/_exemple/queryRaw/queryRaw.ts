import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  const result = await prisma.$queryRaw<port[]>(Prisma.sql`SELECT * FROM ship`);


  result.map((item)=> console.log(item.nome));
}

  
main();