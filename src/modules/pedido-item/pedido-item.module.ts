import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoItemService } from './pedido-item.service';
import { PedidoItemController } from './pedido-item.controller';
import { PedidoItem } from './entities/pedido-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoItem])],
  controllers: [PedidoItemController],
  providers: [PedidoItemService],
})
export class PedidoItemModule {}