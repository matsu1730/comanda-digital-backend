import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusPedidoDto } from './create-status-pedido.dto';

export class UpdateStatusPedidoDto extends PartialType(CreateStatusPedidoDto) {}
