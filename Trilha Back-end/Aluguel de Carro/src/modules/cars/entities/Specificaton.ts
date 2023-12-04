import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

class Specification{
  @PrimaryColumn()
  id?: string;
  
  @Column()
  name: string;
  
  @Column()
  matricula: string;
  
  @CreateDateColumn()
  createdAt: Date;
  

  constructor(){
    if(!this.id){
      this.id = uuidV4()
    }
  }
}

export { Specification }