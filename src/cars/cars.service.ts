import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from '../cars/interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  getAll() {
    return this.cars;
  }

  getOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException('Car not found');
    return car;
  }

  create(createDTO: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createDTO,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getOne(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...car, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.getOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return { method: 'DELETE', id };
  }

  populateCars(cars: Car[]) {
    this.cars = cars;
  }
}
