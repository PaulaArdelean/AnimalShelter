import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { AnimalDeletedEvent } from '../impl/animal-deleted.event';
import { Logger } from '@nestjs/common';

@EventsHandler(AnimalDeletedEvent)
export class AnimalDeletedHandler
  implements IEventHandler<AnimalDeletedEvent> {
  handle(event: AnimalDeletedEvent) {
    Logger.log(event, 'AnimalDeletedEvent'); // write here
  }
}
