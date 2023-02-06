import { Role } from '../model/Role';
import {IRoleRepository, ICreateRoleDTO } from '../repositories/IRoleRepository';


class RoleRepository implements IRoleRepository {
  private role: Role[]

  constructor(){
    this.role = [];
  }

  create({ id, description }: ICreateRoleDTO):void {
    const role = new Role();
    Object.assign(role, { id, description, create_at: new Date() });
    this.role.push(role);
  }

  list(): Role[]{
    return this.role;
  }

  findByDescription(description): Role {
    const role = this.role.find((role)=> role.description === description);
    return role;
  }
}

export {RoleRepository}