import { IsNotEmpty } from 'class-validator';

export class CreateReservaMesaLogDto {
  @IsNotEmpty()
  dt_reserva: Date;
  @IsNotEmpty()
  qtd_lugares: number;
  @IsNotEmpty()
  id_estabelecimento: number;
  @IsNotEmpty()
  id_cliente: number;
}
