import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@ApiTags('bookings')
@Controller({ path: '/bookings', version: '1' })
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  // @Post()
  // create(@Body() createBookingDto: CreateBookingDto) {
  //   return this.bookingService.create(createBookingDto);
  // }
  @Post()
  create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    return this.bookingService.create(createBookingDto);
  }

  // @Get()
  // findAll() {
  //   return this.bookingService.findAll();
  // }
  @Get()
  findAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.bookingService.findOne(+id);
  // }
  @Get(':uuid')
  findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string): Promise<Booking> {
    return this.bookingService.findOneByUuid(uuid);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
  //   return this.bookingService.update(+id, updateBookingDto);
  // }
  @Patch(':uuid')
  update(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ): Promise<Booking> {
    return this.bookingService.update(uuid, updateBookingDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bookingService.remove(+id);
  // }
  @Delete(':uuid')
  remove(@Param('uuid', new ParseUUIDPipe()) uuid: string): Promise<DeleteResult> {
    return this.bookingService.remove(uuid);
  }
}
