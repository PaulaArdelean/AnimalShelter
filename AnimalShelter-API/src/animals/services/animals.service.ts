import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateAnimalCommand } from '../commands/create-animal/create-animal.command';
import { DeleteAnimalCommand } from '../commands/delete-animal/delete-animal.command';
import { CreateAnimalDto } from '../dto/create-animal.dto';


@Injectable()
export class AnimalsService {
  constructor(
    private readonly commandBus: CommandBus,
    ) {}

  async createAnimal(animal: CreateAnimalDto) {
    return await this.commandBus.execute(
      new CreateAnimalCommand(animal),
    );
  }

  async deleteAnimal(id: string) {
    return await this.commandBus.execute(
      new DeleteAnimalCommand(id),
    );
  }

}
