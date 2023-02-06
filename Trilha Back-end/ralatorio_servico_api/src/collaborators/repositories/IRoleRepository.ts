import { Role } from '../model/Role'

interface ICreateRoleDTO{
  description: string;
  id:string;
  
}

interface IRoleRepository {
  create({id, description}:ICreateRoleDTO):void
  findByDescription({description}): Role;
}

export { IRoleRepository, ICreateRoleDTO }