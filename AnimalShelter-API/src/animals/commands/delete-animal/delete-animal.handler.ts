
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AnimalRepository } from 'src/animals/repository/animal-repository';
import { DeleteAnimalCommand } from './delete-animal.command';


@CommandHandler(DeleteAnimalCommand)
export class DeleteAnimalHandler implements ICommandHandler<DeleteAnimalCommand> {
  constructor(private animalRepository: AnimalRepository) {}

  async execute(command: DeleteAnimalCommand): Promise<void> {
    this.animalRepository.delete(command.id);
  }
}