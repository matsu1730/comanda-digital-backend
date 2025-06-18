import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreatePedidoItemDto } from '../../pedido-item/dto/create-pedido-item.dto';
import { Type } from '@nestjs/class-transformer';

export class CreatePedidoComItensDto {
  @IsNotEmpty()
  idCliente: number;

  @IsNotEmpty()
  idEstabelecimento: number;

  @IsNotEmpty()
  idStatusPedido: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePedidoItemDto)
  itens: CreatePedidoItemDto[];
}
