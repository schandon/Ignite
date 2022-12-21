import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.colaborador.createMany({
  data:[{
    full_name: "Adriana Bandeira Souza",
    email: "adriana.bandeira@jrcbrasil.com",
    user_domain: "adriana.bandeira",
    acess_server: "Level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Alexandre Souza Pereira",
    email: "alexandre.pereira@jrcbrasil.com",
    user_domain: "alexandre.pereira",
    acess_server: "Level 6",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Antonio Carlos Francisco Pereira",
    email: "antonio.pereira@jrcbrasil.com",
    user_domain: "antonio.pereira",
    acess_server: "Level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Carlos Cezar Possoni Carvalho Palmeira",
    email: "carlos.carvalho@jrcbrasil.com",
    user_domain: "carlos.carvalho",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Carlos Eduardo Lito Pereira",
    email: "carlos.lito@jrcbrasil.com",
    user_domain: "carlos.lito",
    acess_server: "Level 5",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Carlos Alberto da Silva Mota",
    email: "carlos.mota@jrcbrasil.com",
    user_domain: "carlos.mota",
    acess_server: "Level 3",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Danubia Cecilia de Barros Pinto",
    email: "danubia.barros@jrcbrasil.com",
    user_domain: "danubia.barros",
    acess_server: "Level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Ducicleide da Silva Santos",
    email: "ducicleide.santos@jrcbrasil.com",
    user_domain: "ducicleide.santos",
    acess_server: "Level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Edilene Clotildes Pereira",
    email: "edilene.pereira@jrcbrasil.com",
    user_domain: "edilene.pereira",
    acess_server: "level 2",
    office: "Santos",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Evelyn Gomes Pereira",
    email: "evelyn.pereira@jrcbrasil.com",
    user_domain: "evelyn.pereira",
    acess_server: "level 2",
    office: "Santos",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Eduardo Batista Correia",
    email: "eduardo.correia@jrcbrasil.com",
    user_domain: "eduardo.correia",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Francis Alberto Rodrigues Armelau",
    email: "francis.armelau@jrcbrasil.com",
    user_domain: "francis.armelau",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Heber Noronha Silva",
    email: "heber.noronha@jrcbrasil.com",
    user_domain: "heber.noronha",
    acess_server: "level 3",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Ivany Da Motta Rodrigues",
    email: "ivany.rodrigues@jrcbrasil.com",
    user_domain: "ivany.rodrigues",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Jorge Luis De Oliveira Ferrari",
    email: "jorge.ferrari@jrcbrasil.com",
    user_domain: "jorge.ferrari",
    acess_server: "level 6",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Kumiko Iiboshi H. Costa",
    email: "kumiko.iiboshi@jrcbrasil.com",
    user_domain: "kumiko.iiboshi",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Marco Antonio Carvalho",
    email: "marco.carvalho@jrcbrasil.com",
    user_domain: "marco.carvalho",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Marcos Antonio Alves",
    email: "marcos.alves@jrcbrasil.com",
    user_domain: "marcos.alves",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Masaru Saito",
    email: "masaru.saito@jrcbrasil.com",
    user_domain: "masaru.saito",
    acess_server: "level 5",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Eliane Mayumi Yaeda",
    email: "mayumi.yaeda@jrcbrasil.com",
    user_domain: "mayumi.yaeda",
    acess_server: "level 2",
    office: "Santos",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Murillo Lemos de Souza",
    email: "murillo.lemos@jrcbrasil.com",
    user_domain: "murillo.lemos",
    acess_server: "level 2",
    office: "Santos",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Renato Nunes Vaz",
    email: "renato.vaz@jrcbrasil.com",
    user_domain: "renato.vaz",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Rodrigo Alves dos Santos Veloso",
    email: "rodrigo.veloso@jrcbrasil.com",
    user_domain: "rodrigo.veloso",
    acess_server: "level 2",
    office: "Santos",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Rodrigo de Souza Vidal",
    email: "rodrigo.vidal@jrcbrasil.com",
    user_domain: "rodrigo.vidal",
    acess_server: "level 3",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Tadeu Mezzavilla",
    email: "tadeu.mezzavilla@jrcbrasil.com",
    user_domain: "tadeu.mezzavilla",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Roni Maki Ferreira",
    email: "maki.ferreira@jrcbrasil.com",
    user_domain: "maki.ferreira",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Zaidi Leal Cândido",
    email: "zaidi.leal@jrcbrasil.com",
    user_domain: "zaidi.leal",
    acess_server: "level 3",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Zoraya Lopes Fernandes Martinho",
    email: "zoraya.martinha@jrcbrasil.com",
    user_domain: "zoraya.martinha",
    acess_server: "level 3",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: false,
  },{
    full_name: "Genesis Caetano Mendonça",
    email: "genesis.mendonca@jrcbrasil.com",
    user_domain: "genesis.mendonca",
    acess_server: "level 2",
    office: "Rio de Janeiro",
    perm_acess_internet: true,
    perm_install_software: true,
    trainee: true,
  }]
});

console.log(result)
}
main();