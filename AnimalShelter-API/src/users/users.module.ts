import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UsersController } from './users.controller';
import { UserRepository } from './repository/user-repository';
import { CommandHandlers } from './commands';
import { IdGenerator, UuidGenerator } from 'src/shared';
import { UserRepositoryMemoryAdapter } from './repository/memory/user-repository-memory.adapter';
import { QueryHandlers } from './queries';

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [
    {
      provide: IdGenerator,
      useClass: UuidGenerator,
    },
    {
      provide: UserRepository,
      useClass: UserRepositoryMemoryAdapter,
    },
    ...CommandHandlers,
    ...QueryHandlers,
  ],
})
export class UsersModule { }