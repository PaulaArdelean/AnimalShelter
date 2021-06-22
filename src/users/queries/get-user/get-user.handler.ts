  
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { User } from 'src/users/entity/user.entity';
import { UserRepository } from 'src/users/repository/user-repository';
import { GetUserQuery } from './get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private userRepository: UserRepository) {}

  async execute(query: GetUserQuery): Promise<User> {
    return this.userRepository.findOneById(query.id);
  }
}