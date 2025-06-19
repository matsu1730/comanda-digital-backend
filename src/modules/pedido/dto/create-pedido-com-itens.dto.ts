import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from '@nestjs/class-transformer';
import { UpdatePedidoItemDto } from '../../pedido-item/dto/update-pedido-item.dto';

export class CreatePedidoComItensDto {
  @IsNotEmpty()
  idCliente: number;

  @IsNotEmpty()
  idEstabelecimento: number;

  @IsNotEmpty()
  idStatusPedido: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdatePedidoItemDto)
  itens: UpdatePedidoItemDto[];
}
