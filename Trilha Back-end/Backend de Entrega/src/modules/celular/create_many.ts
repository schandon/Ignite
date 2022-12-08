import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.celular.createMany({
  data: [{
    //adriana
    model: "iPhone 11",
    so: "iOS",
    no_: "+55 (21) 988.058.157",
    adm_aproved: true,
  },{
    //alexandre
    model: "iPhone 12 Mini",
    so: "iOS",
    no_: "+55 (21) 964.607.005",
    adm_aproved: true, 
},{
  //lito
  model: "iPhone 14 max",
  so: "iOS",
  no_: "+55 (21) 992.221.295",
  adm_aproved: true, 
},{
  //masaru
  model: "iPhone 11 Pro",
  so: "iOS",
  no_: "+55 (21) 974.205.019",
  adm_aproved: true, 
},{
  //Genesis
  model: "Huawei",
  so: "Android",
  no_: "+55 (21) 991.773.678",
  adm_aproved: true, 
},{
  //zaidi
  model: "iPhone 12 Pro Max",
  so: "iOS",
  no_: "+55 (21) 991.443.748",
  adm_aproved: true, 
},{
  //zoraya
  model: "iPhone 11 Pro Max",
  so: "iOS",
  no_: "+55 (21) 992.909.077",
  adm_aproved: true, 
},{
  //antonio
  model: "SM-G570M",
  so: "Android",
  no_: "+55 (21) 993.475.468",
  adm_aproved: true,
},{
  //carlos carvalho
  model: "SM-A520F",
  so: "Android",
  no_: "+55 (21) 968.708.035",
  adm_aproved: true,
},{
  //mota
  model: "Redmi note 8",
  so: "Android",
  no_: "+55 (21) 981.422.417",
  adm_aproved: true,
},{
  //danubia
  model: "SM-G611MT",
  so: "Android",
  no_: "+55 (21) 993.590.447",
  adm_aproved: true,
},{
  //duci
  model: "SM-G611MT",
  so: "Android",
  no_: "+55 (21) 993.398.815",
  adm_aproved: true,
},{
  //tadeu
  model: "SM-G920I",
  so: "Android",
  no_: "+55 (21) 991.443.748",
  adm_aproved: true,
},{
  //edilene
  model: "SM-G920I",
  so: "Android",
  no_: "+55 (21) 975.244.631",
  adm_aproved: true,
},{
  //Eduardo
  model: "SM-G781B",
  so: "Android",
  no_: "+55 (21) 988.012.867",
  adm_aproved: true,
},{
  //francis
  model: "SM-G9600",
  so: "Android",
  no_: "+55 (21) 992.905.235",
  adm_aproved: true,
},{
  //heber
  model: "SM-A325M/DS",
  so: "Android",
  no_: "+55 (21) 975.804.838",
  adm_aproved: true,
},{
  //ivany
  model: "SM-G570M",
  so: "Android",
  no_: "+55 (21) 993.137.186",
  adm_aproved: true,
},{
  //joru
  model: "SM-A325M/DS",
  so: "Android",
  no_: "+55 (21) 992.668.056",
  adm_aproved: true,
},{
  //evelyn
  model: "SM-A325M/DS",
  so: "Android",
  no_: "+55 (21) 998.638.846",
  adm_aproved: true,
},{
  //marcos
  model: "moto g7 power",
  so: "Android",
  no_: "+55 (21) 992.062.540",
  adm_aproved: true,
},{
  //marco
  model: "X502CA",
  so: "Android",
  no_: "+55 (21) 981.891.203",
  adm_aproved: true,
},{
  //Kumiko
  model: "iPhone 7",
  so: "iOS",
  no_: "+55 (21) 999.062.750",
  adm_aproved: true,
},{
  //mayumi
  model: "SM-A325M/DS",
  so: "Android",
  no_: "+55 (21) 975.903.440",
  adm_aproved: true,
},{
  //murilo 
  model: "SM-A325M/DS",
  so: "Android",
  no_: "+55 (21) 996.645.313",
  adm_aproved: true,
},{
  //Renato
  model: "SM-G930F",
  so: "Android",
  no_: "+55 (21) 992.021.235",
  adm_aproved: true,
},{
  //Rodrigo Veloso
  model: "SM-G611MT",
  so: "Android",
  no_: "+55 (21) 991.776.796",
  adm_aproved: true,
},{
  //Rodrigo Vidal
  model: "SM-A325M/DS",
  so: "Android",
  no_: "+55 (21) 990.043.144",
  adm_aproved: true,
},{
  //Roni maki
  model: "Moto G (5S)",
  so: "Android",
  no_: "+55 (21) 993.449.331",
  adm_aproved: true,
}],

});

  console.log(result)
}
main();