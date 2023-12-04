import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationsController } from "./CreateSpecificationController";

const specificationsRepository = null;
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
export const createSpecificationController = new CreateSpecificationsController(createSpecificationUseCase);