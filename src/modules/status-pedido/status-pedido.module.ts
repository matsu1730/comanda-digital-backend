import { Module } from '@nestjs/common';
import { StatusPedidoService } from './status-pedido.service';
import { StatusPedidoController } from './status-pedido.controller';

@Module({
  controllers: [StatusPedidoController],
  providers: [StatusPedidoService]
})
export class StatusPedidoModule {}
