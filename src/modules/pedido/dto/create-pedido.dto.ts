import { IsNotEmpty } from 'class-validator';

export class CreatePedidoDto {
  @IsNotEmpty()
  idEstabelecimento: number;

  @IsNotEmpty()
  idCliente: number;

  @IsNotEmpty()
  idStatusPedido: number;
}