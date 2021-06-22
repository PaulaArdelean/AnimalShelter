
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { Animal } from '../entity/animal.entity';

export abstract class AnimalRepository {
  abstract findOneById(id: string): Promise<Animal>;
  abstract findAll(): Promise<Animal[]>;

  abstract create(id: string, payload: CreateAnimalDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
  // abstract async update(id: string, payload: UpdateBookDto): Promise<void>;
}