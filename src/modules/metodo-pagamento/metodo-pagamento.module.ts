import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPagamentoService } from './metodo-pagamento.service';
import { MetodoPagamentoController } from './metodo-pagamento.controller';
import { MetodoPagamento } from './entities/metodo-pagamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoPagamento])],
  controllers: [MetodoPagamentoController],
  providers: [MetodoPagamentoService],
})
export class MetodoPagamentoModule {}