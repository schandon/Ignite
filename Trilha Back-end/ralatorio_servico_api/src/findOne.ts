import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const findOne = await prisma.ship.findFirst();
  console.log(findOne);
}

main();

