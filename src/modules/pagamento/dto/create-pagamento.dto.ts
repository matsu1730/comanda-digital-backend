import { IsDateString, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreatePagamentoDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  valor: number;

  @IsNotEmpty()
  @IsDateString()
  dataPagamento: Date;

  @IsNotEmpty()
  idPedido: number;

  @IsNotEmpty()
  idClienteMetodoPagamento: number;
}