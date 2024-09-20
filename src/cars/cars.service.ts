import { v4 as uuid } from "uuid";

import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla'
    },
    {
      id: uuid(),
      brand: 'Honda',
       model: 'Civic'
    },
    {
      id: uuid(),
      brand: 'Jeep',
       model: 'Cherokee'
    }
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);

    if (!car) {
      throw new NotFoundException(`Id '${id}' no encontrado`);
    }
    return car;
  }

  create( createCarDto: CreateCarDto){ 
    const car: Car = {
      id: uuid(),
      brand: createCarDto.brand,
      model: createCarDto.model
    }
    this.cars.push(car)

    return car
  }

  update(id: string, updateCarDto: UpdateCarDto) {

  }


}

