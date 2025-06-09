import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pagamento } from './entities/pagamento.entity';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Injectable()
export class PagamentoService {
  constructor(
    @InjectRepository(Pagamento)
    private readonly pagamentoRepository: Repository<Pagamento>,
  ) {}

  async create(createPagamentoDto: CreatePagamentoDto): Promise<Pagamento> {
    const entity = this.pagamentoRepository.create(createPagamentoDto);
    return this.pagamentoRepository.save(entity);
  }

  async findAll(): Promise<Pagamento[]> {
    return this.pagamentoRepository.find();
  }

  async findOne(id: number): Promise<Pagamento> {
    const entity = await this.pagamentoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Pagamento com ID ${id} não encontrado`);
    }
    return entity;
  }

  async update(id: number, updatePagamentoDto: UpdatePagamentoDto): Promise<Pagamento> {
    await this.pagamentoRepository.update(id, updatePagamentoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pagamentoRepository.delete(id);
  }
}