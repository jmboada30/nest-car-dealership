import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Ford', model: 'Mustang' },
    { id: 2, brand: 'Audi', model: 'A6' },
    { id: 3, brand: 'BMW', model: 'X5' },
    { id: 4, brand: 'Ferrari', model: '458' },
  ];

  getAll() {
    return this.cars;
  }

  getOne(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException('Car not found');
    return car;
  }
}
