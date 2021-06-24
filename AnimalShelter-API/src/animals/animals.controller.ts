import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { GetAnimalQuery } from './queries/get-animal/get-animal.query';
import { GetAnimalsQuery } from './queries/get-animals/get-animals.query';
import { AnimalsService } from './services/animals.service';

@Controller('animals')
export class AnimalsController {
  constructor(
    private readonly animalsService: AnimalsService,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto) {  
    return this.animalsService.createAnimal(createAnimalDto);
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
    return this.animalsService.deleteAnimal(id);
  }
}