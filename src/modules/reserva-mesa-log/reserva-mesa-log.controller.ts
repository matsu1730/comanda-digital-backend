import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservaMesaLogService } from './reserva-mesa-log.service';
import { CreateReservaMesaLogDto } from './dto/create-reserva-mesa-log.dto';
import { UpdateReservaMesaLogDto } from './dto/update-reserva-mesa-log.dto';

@Controller('reserva-mesa-log')
export class ReservaMesaLogController {
  constructor(private readonly service: ReservaMesaLogService) {}

  @Post()
  create(@Body() dto: CreateReservaMesaLogDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateReservaMesaLogDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
