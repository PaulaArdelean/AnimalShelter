import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CommandHandlers } from './commands';
import { IdGenerator, UuidGenerator } from 'src/shared';

import { QueryHandlers } from './queries';
import { AnimalsController } from './animals.controller';
import { AnimalRepository } from './repository/animal-repository';
import { AnimalRepositoryMemoryAdapter } from './repository/memory/animal-repository-memory.adapter';
import { EventStoreModule } from 'src/shared/event-store/event-store.module';
import { EventHandlers } from './events/handlers';
import { AnimalsService } from './services/animals.service';

@Module({
  imports: [
    CqrsModule,
    EventStoreModule.forFeature()
  ],
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
    ...EventHandlers,
    AnimalsService
  ],
})
export class AnimalsModule {}