import { Injectable } from '@nestjs/common';
import { CreateCategoriaProdutoDto } from './dto/create-categoria-produto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoria-produto.dto';

@Injectable()
export class CategoriaProdutoService {
  create(dto: CreateCategoriaProdutoDto) {
    return 'This action adds a new categoria-produto';
  }

  findAll() {
    return `This action returns all categoria-produto`;
  }

  findOne(id: number) {
    return `This action returns a #categoria-produto with id $<built-in function id>`;
  }

  update(id: number, dto: UpdateCategoriaProdutoDto) {
    return `This action updates a #categoria-produto with id $<built-in function id>`;
  }

  remove(id: number) {
    return `This action removes a #categoria-produto with id $<built-in function id>`;
  }
}
