import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { CreateAnimalCommand } from './commands/create-animal/create-animal.command';
import { DeleteAnimalCommand } from './commands/delete-animal/delete-animal.command';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { GetAnimalQuery } from './queries/get-animal/get-animal.query';
import { GetAnimalsQuery } from './queries/get-animals/get-animals.query';

@Controller('animals')
export class AnimalsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus
  ) {}

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto) {  
    this.eventBus.publish(new CreateAnimalCommand(createAnimalDto));
    return this.commandBus.execute(new CreateAnimalCommand(createAnimalDto));
  }

  @Get()
  findAll() {
    return this.queryBus.execute(new GetAnimalsQuery());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queryBus.execute(new GetAnimalQuery(id));
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    this.eventBus.publish(new DeleteAnimalCommand(id));
    return this.commandBus.execute(new DeleteAnimalCommand(id));
  }
}