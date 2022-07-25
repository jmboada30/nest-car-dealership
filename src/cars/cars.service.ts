import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from '../cars/interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Ford', model: 'Mustang' },
    { id: uuid(), brand: 'Audi', model: 'A6' },
    { id: uuid(), brand: 'BMW', model: 'X5' },
    { id: uuid(), brand: 'Ferrari', model: '458' },
  ];

  getAll() {
    return this.cars;
  }

  getOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException('Car not found');
    return car;
  }
}
