import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const entity = this.produtoRepository.create(createProdutoDto);
    return this.produtoRepository.save(entity);
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async findOne(id: number): Promise<Produto> {
    const entity = await this.produtoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return entity;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    await this.produtoRepository.update(id, updateProdutoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}