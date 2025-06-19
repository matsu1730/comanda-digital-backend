import { Module } from '@nestjs/common';
import { CategoriaProdutoService } from './categoria-produto.service';
import { CategoriaProdutoController } from './categoria-produto.controller';
import { CategoriaProduto } from './entities/categoria-produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaProduto])],
  controllers: [CategoriaProdutoController],
  providers: [CategoriaProdutoService],
})
export class CategoriaProdutoModule {}
