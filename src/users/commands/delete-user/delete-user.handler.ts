
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserRepository } from 'src/users/repository/user-repository';
import { DeleteUserCommand } from './delete-user.command';


@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler implements ICommandHandler<DeleteUserCommand> {
  constructor(private userRepository: UserRepository) {}

  async execute(command: DeleteUserCommand): Promise<void> {
    this.userRepository.delete(command.id);
  }
}