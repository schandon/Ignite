import { Router } from "express";
import { v4 as uuidV4 } from "uuid"
import { Collaborator } from "../Collaborators/collaborator";

const collaboratorsRoutes = Router()

const collaborators: Collaborator[] = [];

collaboratorsRoutes.post("/", (request, response) => {
  const { matricula, name} = request.body;

  const collaborator = new Collaborator()

  Object.assign(collaborator, {
    name,
    matricula,
    createdAt: new Date()
  })

  collaborators.push(collaborator)

  return response.status(201).send(collaborator);
})

export {collaboratorsRoutes};