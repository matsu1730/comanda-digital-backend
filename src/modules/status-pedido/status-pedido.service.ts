import { Injectable } from '@nestjs/common';
import { CreateStatusPedidoDto } from './dto/create-status-pedido.dto';
import { UpdateStatusPedidoDto } from './dto/update-status-pedido.dto';

@Injectable()
export class StatusPedidoService {
  create(dto: CreateStatusPedidoDto) {
    return 'This action adds a new status-pedido';
  }

  findAll() {
    return `This action returns all status-pedido`;
  }

  findOne(id: number) {
    return `This action returns a #status-pedido with id $<built-in function id>`;
  }

  update(id: number, dto: UpdateStatusPedidoDto) {
    return `This action updates a #status-pedido with id $<built-in function id>`;
  }

  remove(id: number) {
    return `This action removes a #status-pedido with id $<built-in function id>`;
  }
}
