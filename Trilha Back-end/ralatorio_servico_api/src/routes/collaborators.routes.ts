import { Router } from "express";

import { createCollaboratorController } from "../Collaborators/useCases/createCollaborator";

const collaboratorRoutes = Router()

collaboratorRoutes.post("/", (request, response) => {
    return createCollaboratorController.handle(request, response);
})


export {collaboratorRoutes};