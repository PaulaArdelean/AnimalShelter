import { IEvent } from '@nestjs/cqrs';
import { CreateAnimalDto } from 'src/animals/dto/create-animal.dto';

export class AnimalCreatedEvent implements IEvent {
  constructor(
    public readonly AnimalDto: CreateAnimalDto) {}
}
