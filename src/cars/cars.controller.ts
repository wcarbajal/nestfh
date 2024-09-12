import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { error } from 'console';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsServices: CarsService)
  {

  }

  @Get()
  getAllCars(){
    
    return this.carsServices.findAll();
  }

  @Get(':id')
  getCarsbyId( @Param('id', new ParseUUIDPipe( {version: '4' } ), ) id: string ){
    console.log( {id});
    return this.carsServices.findOneById(id)   // Return a default message if;
  }
  @Post()
  createCar( @Body() createCardDto: CreateCarDto){
    return this.carsServices.create(createCardDto);;
  }

  @Patch(':id')
  updateCar( 
    @Param('id', ParseUUIDPipe) id:string,
    @Body()  createCarDto: CreateCarDto){
    return createCarDto;
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseIntPipe) id: number){
    return { message: `Car ${id} eliminado` };
  }

}


