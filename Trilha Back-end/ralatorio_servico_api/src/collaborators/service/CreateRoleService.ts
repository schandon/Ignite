import { IRoleRepository } from "../repositories/IRoleRepository";

interface IRquest{
  description: string;
  id: string;
}

class CreateRoleService {
  constructor(private roleRepository: IRoleRepository){}
  
  execute({description, id}: IRquest):void {
      const roleAlredyExists = this.roleRepository.findByIdRole(id);
  
  if(roleAlredyExists){
    throw new Error("Role already exists");
  }

  this.roleRepository.createRole({description, id })
  }
}

export { CreateRoleService };