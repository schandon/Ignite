import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const users = await prisma.service_order.findMany(
      {where:{
        service_report:{
            every:{category_service: 'VDR'}
          
        }
      }}
    )
    console.log(users)
}


main()
