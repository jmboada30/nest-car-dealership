import { Injectable } from '@nestjs/common';
import { BRANDS_SEED } from './data/brans.seed';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandsService: BrandsService,
    private readonly carsService: CarsService,
  ) {}

  populateDB() {
    this.brandsService.populateBrands(BRANDS_SEED);
    this.carsService.populateCars(CARS_SEED);
    return { message: 'DB populated' };
  }
}
