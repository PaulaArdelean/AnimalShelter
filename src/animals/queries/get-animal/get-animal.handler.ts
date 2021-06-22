  
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Animal } from 'src/animals/entity/animal.entity';
import { AnimalRepository } from 'src/animals/repository/animal-repository';
import { GetAnimalQuery } from './get-animal.query';


@QueryHandler(GetAnimalQuery)
export class GetAnimalHandler implements IQueryHandler<GetAnimalQuery> {
  constructor(private animalRepository: AnimalRepository) {}

  async execute(query: GetAnimalQuery): Promise<Animal> {
    return this.animalRepository.findOneById(query.id);
  }
}