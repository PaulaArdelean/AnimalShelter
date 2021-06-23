import { IEvent } from '@nestjs/cqrs';

export class AnimalDeletedEvent implements IEvent {
  constructor(
    public readonly animalId: string) {}
}