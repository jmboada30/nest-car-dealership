import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.getAll();
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.getOne(id);
  }

  @Post()
  create(@Body() car: any) {
    return { method: 'POST', car };
  }

  @Patch('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() car: any) {
    return { method: 'PATCH', car, id };
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return { method: 'DELETE', id };
  }
}
