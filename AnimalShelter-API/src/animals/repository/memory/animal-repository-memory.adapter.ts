import { CreateAnimalDto } from "src/animals/dto/create-animal.dto";
import { Animal } from "src/animals/entity/animal.entity";
import { AnimalRepository } from "../animal-repository";
import { animals } from "./fixtures/animals";


export class AnimalRepositoryMemoryAdapter extends AnimalRepository {
  private animals = animals;

  async findOneById(id: string): Promise<Animal> {
    return this.animals.find(animal => animal.id === id);
  }

  async findAll(): Promise<Animal[]> {
    return this.animals;
  }

  async create(id: string, payload: CreateAnimalDto): Promise<void> {
    const { type, code, userId } = payload;
    const newAnimal = new Animal(id, type, code, userId);
    this.animals.push(newAnimal);
  }

  async delete(id: string): Promise<void> {
    this.animals = this.animals.filter(animal => id !== animal.id);
  }

  // async update(id: string, payload: UpdateUserDto): Promise<void> {
  //   const { firstName, lastName } = payload;
  //   const newUser = new User(id, firstName, lastName);
  //   this.users = this.users.filter(user => id !== user.id);
  //   this.users.push(newUser);
  // }
}