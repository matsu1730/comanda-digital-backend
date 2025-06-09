import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteMetodoPagamentoService } from './cliente-metodo-pagamento.service';
import { ClienteMetodoPagamentoController } from './cliente-metodo-pagamento.controller';
import { ClienteMetodoPagamento } from './entities/cliente-metodo-pagamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteMetodoPagamento])],
  controllers: [ClienteMetodoPagamentoController],
  providers: [ClienteMetodoPagamentoService],
})
export class ClienteMetodoPagamentoModule {}