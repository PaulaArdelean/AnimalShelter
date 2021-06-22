import { CreateAnimalDto } from 'src/animals/dto/create-animal.dto';

export class CreateAnimalCommand {
  constructor(public payload: CreateAnimalDto) {}
}