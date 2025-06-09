import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoPagamento } from './entities/metodo-pagamento.entity';
import { CreateMetodoPagamentoDto } from './dto/create-metodo-pagamento.dto';
import { UpdateMetodoPagamentoDto } from './dto/update-metodo-pagamento.dto';

@Injectable()
export class MetodoPagamentoService {
  constructor(
    @InjectRepository(MetodoPagamento)
    private readonly metodoPagamentoRepository: Repository<MetodoPagamento>,
  ) {}

  async create(createMetodoPagamentoDto: CreateMetodoPagamentoDto): Promise<MetodoPagamento> {
    const entity = this.metodoPagamentoRepository.create(createMetodoPagamentoDto);
    return this.metodoPagamentoRepository.save(entity);
  }

  async findAll(): Promise<MetodoPagamento[]> {
    return this.metodoPagamentoRepository.find();
  }

  async findOne(id: number): Promise<MetodoPagamento> {
    const entity = await this.metodoPagamentoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`MetodoPagamento com ID ${id} não encontrado`);
    }
    return entity;
  }

  async update(id: number, updateMetodoPagamentoDto: UpdateMetodoPagamentoDto): Promise<MetodoPagamento> {
    await this.metodoPagamentoRepository.update(id, updateMetodoPagamentoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.metodoPagamentoRepository.delete(id);
  }
}