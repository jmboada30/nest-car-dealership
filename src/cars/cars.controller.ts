import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

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
  @UsePipes(ValidationPipe)
  create(@Body() createDTO: CreateCarDto) {
    return { method: 'POST', car: createDTO };
  }

  @Patch('/:id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() car: any) {
    return { method: 'PATCH', car, id };
  }

  @Delete('/:id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return { method: 'DELETE', id };
  }
}
