import { AggregateRoot } from '@nestjs/cqrs';
import { UnprocessableEntityException, InternalServerErrorException } from '@nestjs/common';

export class Animal extends AggregateRoot {
  constructor(public id: string, public type: string, public code: string, public userId: string) {
    super();
    this.validate();
  }

  validate(): void {
    if (!this.id) {
      throw new InternalServerErrorException();
    }

    if (!this.type || !this.code) {
      throw new UnprocessableEntityException();
    }
  }
}