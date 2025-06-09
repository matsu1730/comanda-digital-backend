import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateClienteMetodoPagamentoDto {
  @IsNotEmpty()
  @IsString()
  numeroCartao: string;

  @IsNotEmpty()
  @IsDateString()
  validade: Date;

  @IsNotEmpty()
  idCliente: number;

  @IsNotEmpty()
  idMetodoPagamento: number;
}