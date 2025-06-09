import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreatePedidoDto {
  @IsNotEmpty()
  @IsDateString()
  dataCriacao: Date;

  @IsNotEmpty()
  idCliente: number;

  @IsNotEmpty()
  idEstabelecimento: number;
}