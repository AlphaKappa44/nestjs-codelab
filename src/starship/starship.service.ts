import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStarshipDto } from './dto/create-starship.dto';
import { UpdateStarshipDto } from './dto/update-starship.dto';
import { Starship } from './entities/starship.entity';

@Injectable()
export class StarshipService {
  constructor(
    @InjectRepository(Starship)
    private readonly starshipRepository: Repository<Starship>,
  ) {}
  create(createStarshipDto: CreateStarshipDto) {
    return 'This action adds a new starship';
  }

  // #1
  // findAll() {
  //   return `This action returns all starship`;
  // }

  // #2
  // findAll(): Starship[] {
  //   const starshipsJSON = [
  //     {
  //       name: 'Apollo',
  //       speed: 39000,
  //       kilometerPrice: 10000,
  //     },
  //     {
  //       name: 'SpaceX Starship',
  //       speed: 27000,
  //       kilometerPrice: 250000,
  //     },
  //     {
  //       name: 'Sonde Parker',
  //       speed: 532000,
  //       kilometerPrice: 50000,
  //     },
  //   ];

  //   const starships: Starship[] = Object.assign(new Array<Starship>(), starshipsJSON);

  //   return starships;
  // }

  findAll(): Promise<Starship[]> {
    return this.starshipRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} starship`;
  }

  update(id: number, updateStarshipDto: UpdateStarshipDto) {
    return `This action updates a #${id} starship`;
  }

  remove(id: number) {
    return `This action removes a #${id} starship`;
  }
}
