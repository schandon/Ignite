import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
const result =  await prisma.maquina.createMany({
  data:[{
    name: "JRCBR-RJ-11",
    model: "OptiPlex 390",
    so: "Microsoft Windows 10 Pro",
    service_tag: "31DN8S1",
    memory: 0,
    hd: 0,
    ssd: 0,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D12",
    model: "OptiPlex 390",
    so: "Microsoft Windows 10 Pro",
    service_tag: "31FK8S1",
    memory: 0,
    hd: 0,
    ssd: 0,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D13",
    model: "OptiPlex 390",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 0,
    hd: 0,
    ssd: 0,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D10",
    model: "OptiPlex 7050",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 0,
    hd: 0,
    ssd: 0,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D30",
    model: "OptiPlex 7090",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 16,
    hd: 0,
    ssd: 480,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D31",
    model: "OptiPlex 7090",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 16,
    hd: 0,
    ssd: 480,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D32",
    model: "OptiPlex 7090",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 16,
    hd: 0,
    ssd: 480,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D33",
    model: "OptiPlex 7090",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 16,
    hd: 0,
    ssd: 480,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D34",
    model: "OptiPlex 7090",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 16,
    hd: 0,
    ssd: 480,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D35",
    model: "OptiPlex 7090",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 16,
    hd: 0,
    ssd: 480,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D36",
    model: "OptiPlex 7090",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 16,
    hd: 0,
    ssd: 480,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D3",
    model: "OptiPlex",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 0,
    hd: 0,
    ssd: 0,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },{
    name: "JRCBR-RJ-D",
    model: "OptiPlex",
    so: "Microsoft Windows 10 Pro",
    service_tag: "",
    memory: 0,
    hd: 0,
    ssd: 0,
    ip: "",
    mac_address:"",
    cod_jdb: "",
    manager: "",
  },]})
console.log(result);
}

main();