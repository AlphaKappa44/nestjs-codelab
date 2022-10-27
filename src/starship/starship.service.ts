import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateStarshipDto } from './dto/create-starship.dto';
import { UpdateStarshipDto } from './dto/update-starship.dto';
import { Starship } from './entities/starship.entity';

@Injectable()
export class StarshipService {
  constructor(
    @InjectRepository(Starship)
    private readonly starshipRepository: Repository<Starship>,
  ) {}
  create(createStarshipDto: CreateStarshipDto): Promise<Starship> {
    return this.starshipRepository.save(createStarshipDto);
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

  // findOne(id: number) {
  //   return `This action returns a #${id} starship`;
  // }
  findOneByUuid(uuid: string): Promise<Starship | null> {
    return this.starshipRepository.findOneBy({ uuid });
  }

  // update(id: number, updateStarshipDto: UpdateStarshipDto) {
  //   return `This action updates a #${id} starship`;
  // }
  async update(uuid: string, updateStarshipDto: UpdateStarshipDto): Promise<Starship> {
    const starship = await this.findOneByUuid(uuid);

    if (!starship) {
      throw new NotFoundException();
    }

    await this.starshipRepository.save({ id: starship.id, ...updateStarshipDto });

    return this.findOneByUuid(uuid);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} starship`;
  // }
  async remove(uuid: string): Promise<DeleteResult> {
    const starship = await this.findOneByUuid(uuid);

    if (!starship) {
      throw new NotFoundException();
    }

    return this.starshipRepository.delete({ uuid });
  }
}
