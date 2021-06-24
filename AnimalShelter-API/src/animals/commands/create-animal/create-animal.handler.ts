import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { AnimalRepository } from 'src/animals/repository/animal-repository';
import { IdGenerator } from 'src/shared';
import { CreateAnimalCommand } from './create-animal.command';

@CommandHandler(CreateAnimalCommand)
export class CreateAnimalHandler implements ICommandHandler<CreateAnimalCommand> {
  constructor(
    private idGenerator: IdGenerator,
    private animalRepository: AnimalRepository,
    private readonly eventBus: EventBus
  ) {}

  async execute(command: CreateAnimalCommand): Promise<void> {
    this.eventBus.publish(command);
    const id = this.idGenerator.generateId();
    this.animalRepository.create(id, command.payload);
  }
}