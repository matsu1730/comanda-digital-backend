import { Module } from '@nestjs/common';
import { StatusPedidoService } from './status-pedido.service';
import { StatusPedidoController } from './status-pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusPedido } from './entities/status-pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StatusPedido])],
  controllers: [StatusPedidoController],
  providers: [StatusPedidoService],
})
export class StatusPedidoModule {}
