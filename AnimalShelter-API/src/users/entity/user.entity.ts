import { AggregateRoot } from '@nestjs/cqrs';
import { UnprocessableEntityException, InternalServerErrorException } from '@nestjs/common';

export class User extends AggregateRoot {
  constructor(public id: string, public firstName: string, public lastName: string) {
    super();
    this.validate();
  }

  validate(): void {
    if (!this.id) {
      throw new InternalServerErrorException();
    }

    if (!this.firstName || !this.lastName) {
      throw new UnprocessableEntityException();
    }
  }
}