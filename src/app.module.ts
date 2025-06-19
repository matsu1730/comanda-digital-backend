import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormconfig';
import { RamoModule } from './modules/ramo/ramo.module';
import { EstabelecimentoModule } from './modules/estabelecimento/estabelecimento.module';
import { ProdutoModule } from './modules/produto/produto.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { PedidoItemModule } from './modules/pedido-item/pedido-item.module';
import { MetodoPagamentoModule } from './modules/metodo-pagamento/metodo-pagamento.module';
import { ClienteMetodoPagamentoModule } from './modules/cliente-metodo-pagamento/cliente-metodo-pagamento.module';
import { PagamentoModule } from './modules/pagamento/pagamento.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriaProdutoModule } from './modules/categoria-produto/categoria-produto.module';
import { ReservaMesaLogModule } from './modules/reserva-mesa-log/reserva-mesa-log.module';
import { StatusPedidoModule } from './modules/status-pedido/status-pedido.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig),
    RamoModule,
    EstabelecimentoModule,
    ProdutoModule,
    CategoriaProdutoModule,
    ClienteModule,
    PedidoModule,
    PedidoItemModule,
    MetodoPagamentoModule,
    ClienteMetodoPagamentoModule,
    PagamentoModule,
    ReservaMesaLogModule,
    StatusPedidoModule
  ],
})
export class AppModule {}