import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteMetodoPagamento } from './entities/cliente-metodo-pagamento.entity';
import { CreateClienteMetodoPagamentoDto } from './dto/create-cliente-metodo-pagamento.dto';
import { UpdateClienteMetodoPagamentoDto } from './dto/update-cliente-metodo-pagamento.dto';

@Injectable()
export class ClienteMetodoPagamentoService {
  constructor(
    @InjectRepository(ClienteMetodoPagamento)
    private readonly clienteMetodoPagamentoRepository: Repository<ClienteMetodoPagamento>,
  ) {}

  async create(createClienteMetodoPagamentoDto: CreateClienteMetodoPagamentoDto): Promise<ClienteMetodoPagamento> {
    const entity = this.clienteMetodoPagamentoRepository.create(createClienteMetodoPagamentoDto);
    return this.clienteMetodoPagamentoRepository.save(entity);
  }

  async findAll(): Promise<ClienteMetodoPagamento[]> {
    return this.clienteMetodoPagamentoRepository.find();
  }

  async findOne(id: number): Promise<ClienteMetodoPagamento> {
    const entity = await this.clienteMetodoPagamentoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`ClienteMetodoPagamento com ID ${id} não encontrado`);
    }
    return entity;
  }

  async update(id: number, updateClienteMetodoPagamentoDto: UpdateClienteMetodoPagamentoDto): Promise<ClienteMetodoPagamento> {
    await this.clienteMetodoPagamentoRepository.update(id, updateClienteMetodoPagamentoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clienteMetodoPagamentoRepository.delete(id);
  }
}