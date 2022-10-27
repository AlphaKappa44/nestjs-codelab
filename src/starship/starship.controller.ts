import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { StarshipService } from './starship.service';
import { CreateStarshipDto } from './dto/create-starship.dto';
import { UpdateStarshipDto } from './dto/update-starship.dto';
import { Starship } from './entities/starship.entity';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

@ApiTags('starships')
@Controller({ path: '/starships', version: '1' })
export class StarshipController {
  constructor(private readonly starshipService: StarshipService) {}

  @Post()
  create(@Body() createStarshipDto: CreateStarshipDto) {
    return this.starshipService.create(createStarshipDto);
  }

  @Get()
  findAll() {
    return this.starshipService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.starshipService.findOne(+id);
  // }
  @Get(':uuid')
  findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string): Promise<Starship> {
    return this.starshipService.findOneByUuid(uuid);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStarshipDto: UpdateStarshipDto) {
  //   return this.starshipService.update(+id, updateStarshipDto);
  // }
  @Patch(':uuid')
  update(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
    @Body() updateStarshipDto: UpdateStarshipDto,
  ): Promise<Starship> {
    return this.starshipService.update(uuid, updateStarshipDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.starshipService.remove(+id);
  // }
  @Delete(':uuid')
  remove(@Param('uuid', new ParseUUIDPipe()) uuid: string): Promise<DeleteResult> {
    return this.starshipService.remove(uuid);
  }
}
