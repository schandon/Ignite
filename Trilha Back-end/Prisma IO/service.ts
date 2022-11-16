import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
  const result = await prisma.courses.create({
    data:{
      durations: 12,
      name: "TypeScript",
      description:"Curso de TypeScript",
      

    },
  })
  console.log(result);
}


main();