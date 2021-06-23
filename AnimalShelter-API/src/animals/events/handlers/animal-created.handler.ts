import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { AnimalCreatedEvent } from '../impl/animal-created.event';
import { Logger } from '@nestjs/common';

@EventsHandler(AnimalCreatedEvent)
export class AnimalCreatedHandler
  implements IEventHandler<AnimalCreatedEvent> {
  handle(event: AnimalCreatedEvent) {
    Logger.log(event, 'AnimalCreatedEvent'); // write here
  }
}
