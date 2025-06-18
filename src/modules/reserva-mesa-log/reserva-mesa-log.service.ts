import { Injectable } from '@nestjs/common';
import { CreateReservaMesaLogDto } from './dto/create-reserva-mesa-log.dto';
import { UpdateReservaMesaLogDto } from './dto/update-reserva-mesa-log.dto';

@Injectable()
export class ReservaMesaLogService {
  create(dto: CreateReservaMesaLogDto) {
    return 'This action adds a new reserva-mesa-log';
  }

  findAll() {
    return `This action returns all reserva-mesa-log`;
  }

  findOne(id: number) {
    return `This action returns a #reserva-mesa-log with id $<built-in function id>`;
  }

  update(id: number, dto: UpdateReservaMesaLogDto) {
    return `This action updates a #reserva-mesa-log with id $<built-in function id>`;
  }

  remove(id: number) {
    return `This action removes a #reserva-mesa-log with id $<built-in function id>`;
  }
}
