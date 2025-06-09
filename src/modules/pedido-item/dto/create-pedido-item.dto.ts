import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreatePedidoItemDto {
  @IsNotEmpty()
  idPedido: number;

  @IsNotEmpty()
  idProduto: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantidade: number;
}