import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoItem } from './entities/pedido-item.entity';
import { CreatePedidoItemDto } from './dto/create-pedido-item.dto';
import { UpdatePedidoItemDto } from './dto/update-pedido-item.dto';

@Injectable()
export class PedidoItemService {
  constructor(
    @InjectRepository(PedidoItem)
    private readonly pedidoItemRepository: Repository<PedidoItem>,
  ) {}

  async create(createPedidoItemDto: CreatePedidoItemDto): Promise<PedidoItem> {
    const entity = this.pedidoItemRepository.create(createPedidoItemDto);
    return this.pedidoItemRepository.save(entity);
  }

  async findAll(): Promise<PedidoItem[]> {
    return this.pedidoItemRepository.find();
  }

  async findOne(id: number): Promise<PedidoItem> {
    const entity = await this.pedidoItemRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`PedidoItem com ID ${id} não encontrado`);
    }
    return entity;
  }

  async update(id: number, updatePedidoItemDto: UpdatePedidoItemDto): Promise<PedidoItem> {
    await this.pedidoItemRepository.update(id, updatePedidoItemDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pedidoItemRepository.delete(id);
  }
}