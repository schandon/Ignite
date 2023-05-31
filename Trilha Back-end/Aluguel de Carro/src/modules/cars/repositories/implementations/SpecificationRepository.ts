import { Specification } from "../../model/Specificaton";
import { ISpecificationRepository, ICreateSpecificationDTO } from "../ISpecificationRepository";


class SpecificationsRepository implements ISpecificationRepository{
  private specification: Specification[];

  private static INSTANCE: SpecificationsRepository;

  constructor() {
    this.specification = [];
  }
  public static getInstance(): SpecificationsRepository{
    if(!SpecificationsRepository.INSTANCE){
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  }

  create({description, name}:ICreateSpecificationDTO ):void {
    const specification = new Specification();
    Object.assign( specification,{
      description,
      name,
      created_at: new Date(),
    });

    this.specification.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specification.find(specification =>
      specification.name === name);
    return specification;
  }
}

export {SpecificationsRepository}