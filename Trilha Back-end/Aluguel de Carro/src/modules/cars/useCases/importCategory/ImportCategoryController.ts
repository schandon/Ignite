import { Response, Request } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCas";

class ImportCategoryController{
  constructor(private importCategoryUsaCase: ImportCategoryUseCase){}
  handle(request: Request, response: Response){
    const { file } = request;

    this.importCategoryUsaCase.execute(file);

    return response.status(200).send();
  }
}

export { ImportCategoryController };