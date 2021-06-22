import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { User } from 'src/users/entity/user.entity';
import { UserRepository } from 'src/users/repository/user-repository';
import { GetUsersQuery } from './get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}