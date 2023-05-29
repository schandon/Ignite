import { v4 as uuidV4 } from "uuid"

class Category{
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

export { Category }