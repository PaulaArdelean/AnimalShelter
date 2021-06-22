
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { Animal } from '../entity/animal.entity';

export abstract class AnimalRepository {
  abstract async findOneById(id: string): Promise<Animal>;
  abstract async findAll(): Promise<Animal[]>;

  abstract async create(id: string, payload: CreateAnimalDto): Promise<void>;
  abstract async delete(id: string): Promise<void>;
  // abstract async update(id: string, payload: UpdateBookDto): Promise<void>;
}