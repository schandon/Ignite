import { Router } from "express";

import { RoleRepository } from "../Collaborators/repositories/RoleRepository";
import { CreateRoleService } from "../Collaborators/service/CreateRoleService";

const roleRoutes = Router();
const roleRepository = new RoleRepository();

roleRoutes.post('/', (request, response) => {
  const { description, id } = request.body;
  
  const createRoleService = new CreateRoleService(roleRepository);

  createRoleService.execute({id, description})

  return response.status(201).send();
})

roleRoutes.get('/', (request, response) => {
  const all = roleRepository.list();

  return response.json(all);

});

export { roleRoutes };