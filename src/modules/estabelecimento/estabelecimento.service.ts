import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estabelecimento } from './entities/estabelecimento.entity';
import { CreateEstabelecimentoDto } from './dto/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from './dto/update-estabelecimento.dto';

@Injectable()
export class EstabelecimentoService {
  constructor(
    @InjectRepository(Estabelecimento)
    private readonly estabelecimentoRepository: Repository<Estabelecimento>,
  ) {}

  async create(createEstabelecimentoDto: CreateEstabelecimentoDto): Promise<Estabelecimento> {
    const entity = this.estabelecimentoRepository.create(createEstabelecimentoDto);
    return this.estabelecimentoRepository.save(entity);
  }

  async findAll(): Promise<Estabelecimento[]> {
    return this.estabelecimentoRepository.find();
  }

  async findOne(id: number): Promise<Estabelecimento> {
    const entity = await this.estabelecimentoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Estabelecimento com ID ${id} não encontrado`);
    }
    return entity;
  }

  async update(id: number, updateEstabelecimentoDto: UpdateEstabelecimentoDto): Promise<Estabelecimento> {
    await this.estabelecimentoRepository.update(id, updateEstabelecimentoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.estabelecimentoRepository.delete(id);
  }
}