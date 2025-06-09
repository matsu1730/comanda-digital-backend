import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const entity = this.clienteRepository.create(createClienteDto);
    return this.clienteRepository.save(entity);
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async findOne(id: number): Promise<Cliente> {
    const entity = await this.clienteRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }
    return entity;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    await this.clienteRepository.update(id, updateClienteDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}