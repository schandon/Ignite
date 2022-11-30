import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  const result = await prisma.ship.findMany({
    where:{
      OR:[ 
        {name:{
            contains: "ReactJS"
      }},
      { name:{
        contains: "React Native"
      }}
    ]} 
        
    })
  
  console.log(result);  
  }
  
main();