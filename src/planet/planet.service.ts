import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';
import { Planet } from './entities/planet.entity';

@Injectable()
export class PlanetService {
  constructor(
    @InjectRepository(Planet)
    private readonly planetRepository: Repository<Planet>,
  ) {}

  create(createPlanetDto: CreatePlanetDto) {
    return 'This action adds a new planet';
  }

  // #1
  // findAll() {
  //   return `This action returns all planet`;
  // }

  // #2
  // findAll(): Planet[] {
  //   const planetsJSON = [
  //     {
  //       name: 'Lune',
  //       distanceToEarth: 384400,
  //     },
  //     {
  //       name: 'Venus',
  //       distanceToEarth: 41400000,
  //     },
  //     {
  //       name: 'Mars',
  //       distanceToEarth: 78340000,
  //     },
  //     {
  //       name: 'Mercure',
  //       distanceToEarth: 91690000,
  //     },
  //     {
  //       name: 'Jupiter',
  //       distanceToEarth: 628730000,
  //     },
  //     {
  //       name: 'Saturne',
  //       distanceToEarth: 1275000000,
  //     },
  //     {
  //       name: 'Uranus',
  //       distanceToEarth: 2723950000,
  //     },
  //     {
  //       name: 'Neptune',
  //       distanceToEarth: 4351400000,
  //     },
  //   ];
  // const planets: Planet[] = Object.assign(new Array<Planet>(), planetsJSON);

  // return planets;
  // }
  findAll(): Promise<Planet[]> {
    return this.planetRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} planet`;
  }

  update(id: number, updatePlanetDto: UpdatePlanetDto) {
    return `This action updates a #${id} planet`;
  }

  remove(id: number) {
    return `This action removes a #${id} planet`;
  }
}
