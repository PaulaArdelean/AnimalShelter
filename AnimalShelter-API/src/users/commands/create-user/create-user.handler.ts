import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserRepository } from 'src/users/repository/user-repository';
import { CreateUserCommand } from './create-user.command';
import { IdGenerator } from 'src/shared';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private idGenerator: IdGenerator,
    private userRepository: UserRepository,
  ) {}

  async execute(command: CreateUserCommand): Promise<void> {
    const id = this.idGenerator.generateId();
    this.userRepository.create(id, command.payload);
  }
}