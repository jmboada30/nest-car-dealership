import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.getAll();
  }

  @Get('/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.getOne(id);
  }

  @Post()
  create(@Body() createDTO: CreateCarDto) {
    return this.carsService.create(createDTO);
  }

  @Patch('/:id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() car: UpdateCarDto) {
    return this.carsService.update(id, car);
  }

  @Delete('/:id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
