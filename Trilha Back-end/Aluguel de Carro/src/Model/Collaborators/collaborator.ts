import { v4 as uuidV4 } from "uuid"

class Collaborator{
  name: string;
  matricula: string;
  createdAt: Date;
  id?: string;

  constructor(){
    if(!this.id){
      this.id = uuidV4()
    }
  }
}

export { Collaborator }