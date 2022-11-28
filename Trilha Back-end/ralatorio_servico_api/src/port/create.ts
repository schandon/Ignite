import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.port.createMany({
  data: [{
    id: "1010RJ",
    name: "Porto de Todos os Gabirus Alados",
    cidade:"Rio de Janeiro",
    uf:"RJ",
    latitude: "123.12",
    longitude:  "123.33"

  },{
    id: "3030SP",
    name: "Porto dos Gabirus Bebados",
    cidade:"São Paulo",
    uf:"SP",
    latitude: "90.12",
    longitude:  "13.33"
  
},{
  id: "1220PR",
    name: "Porto Todos os Santos",
    cidade:"Paraná",
    uf:"PR",
    latitude: "123.12",
    longitude:  "123.33"
}],

});

  console.log(result)
}
main();