import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CommandHandlers } from './commands';
import { IdGenerator, UuidGenerator } from 'src/shared';

import { QueryHandlers } from './queries';
import { AnimalsController } from './animals.controller';
import { AnimalRepository } from './repository/animal-repository';
import { AnimalRepositoryMemoryAdapter } from './repository/memory/animal-repository-memory.adapter';

@Module({
  imports: [CqrsModule],
  controllers: [AnimalsController],
  providers: [
    {
      provide: IdGenerator,
      useClass: UuidGenerator,
    },
    {
      provide: AnimalRepository,
      useClass: AnimalRepositoryMemoryAdapter,
    },
    ...CommandHandlers,
    ...QueryHandlers,
  ],
})
export class AnimalsModule {}