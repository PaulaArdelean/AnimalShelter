import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Animal } from "src/animals/entity/animal.entity";
import { AnimalRepository } from "src/animals/repository/animal-repository";
import { GetAnimalsQuery } from "./get-animals.query";

@QueryHandler(GetAnimalsQuery)
export class GetAnimalsHandler implements IQueryHandler<GetAnimalsQuery> {
  constructor(private animalRepository: AnimalRepository) {}

  async execute(): Promise<Animal[]> {
    return this.animalRepository.findAll();
  }
}