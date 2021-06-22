import { IQuery } from '@nestjs/cqrs';

export class GetAnimalQuery implements IQuery {
  constructor(public id: string) {}
}