import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { CreatePedidoComItensDto } from './dto/create-pedido-com-itens.dto';
import { PedidoItem } from '../pedido-item/entities/pedido-item.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(PedidoItem)
    private readonly pedidoItemRepository: Repository<PedidoItem>
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const entity = this.pedidoRepository.create({
      estabelecimento: { id: createPedidoDto.idEstabelecimento },
      cliente: { id: createPedidoDto.idCliente },
      statusPedido: { id: createPedidoDto.idStatusPedido },
    });

    return this.pedidoRepository.save(entity);
  }

  async createWithItems(dto: CreatePedidoComItensDto): Promise<Pedido> {
    const pedido = this.pedidoRepository.create({
      cliente: { id: dto.idCliente } as any,
      estabelecimento: { id: dto.idEstabelecimento } as any,
      statusPedido: { id: dto.idStatusPedido } as any,
    });

    const savedPedido = await this.pedidoRepository.save(pedido);

    const itens = dto.itens.map(i =>
      this.pedidoItemRepository.create({
        pedido: savedPedido,
        produto: { id: i.idProduto } as any,
        quantidade: i.quantidade
      }),
    );

    await this.pedidoItemRepository.save(itens);

    return this.findWithItems(savedPedido.id);
  }


  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  async findOne(id: number): Promise<Pedido> {
    const entity = await this.pedidoRepository.findOneBy({ id });
    if (!entity) {
      throw new NotFoundException(`Pedido com ID ${id} não encontrado`);
    }
    return entity;
  }

  async findWithItems(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne({
      where: { id },
      relations: [
        'cliente',
        'estabelecimento',
        'statusPedido',
        'itens',
        'itens.produto',
      ],
    });

    if (!pedido) {
      throw new NotFoundException(`Pedido com ID ${id} não encontrado`);
    }

    return pedido;
  }

  async findByCliente(idCliente: number): Promise<Pedido[]> {
    return this.pedidoRepository.find({
      where: { cliente: { id: idCliente } },
      relations: ['itens', 'statusPedido'],
      order: { dtCriacao: 'DESC' },
    });
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    const partialEntity: Partial<Pedido> = {};

    if (updatePedidoDto.idCliente) {
      partialEntity.cliente = { id: updatePedidoDto.idCliente } as any;
    }

    if (updatePedidoDto.idEstabelecimento) {
      partialEntity.estabelecimento = { id: updatePedidoDto.idEstabelecimento } as any;
    }

    if (updatePedidoDto.idStatusPedido) {
      partialEntity.statusPedido = { id: updatePedidoDto.idStatusPedido } as any;
    }

    await this.pedidoRepository.update(id, partialEntity);
    return this.findOne(id);
  }
  
  async remove(id: number): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}