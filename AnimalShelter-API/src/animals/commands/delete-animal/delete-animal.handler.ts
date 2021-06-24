
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { AnimalRepository } from 'src/animals/repository/animal-repository';
import { DeleteAnimalCommand } from './delete-animal.command';


@CommandHandler(DeleteAnimalCommand)
export class DeleteAnimalHandler implements ICommandHandler<DeleteAnimalCommand> {
  constructor(
    private animalRepository: AnimalRepository, 
    private readonly eventBus: EventBus
    ) {}

  async execute(command: DeleteAnimalCommand): Promise<void> {
    this.eventBus.publish(command);
    this.animalRepository.delete(command.id);
  }
}