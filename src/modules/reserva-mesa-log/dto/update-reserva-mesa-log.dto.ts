import { PartialType } from '@nestjs/mapped-types';
import { CreateReservaMesaLogDto } from './create-reserva-mesa-log.dto';

export class UpdateReservaMesaLogDto extends PartialType(CreateReservaMesaLogDto) {}
