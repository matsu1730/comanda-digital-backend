import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservaMesaLog } from './entities/reserva-mesa-log.entity';
import { CreateReservaMesaLogDto } from './dto/create-reserva-mesa-log.dto';
import { UpdateReservaMesaLogDto } from './dto/update-reserva-mesa-log.dto';

@Injectable()
export class ReservaMesaLogService {
  constructor(
    @InjectRepository(ReservaMesaLog)
    private readonly reservaMesaLogRepository: Repository<ReservaMesaLog>,
  ) {}

  async create(dto: CreateReservaMesaLogDto): Promise<ReservaMesaLog> {
    console.log(`Criando reserva de mesa: ${JSON.stringify(dto)}`);
    
    const reserva = this.reservaMesaLogRepository.create({
      cliente: { id: dto.id_cliente },
      estabelecimento: { id: dto.id_estabelecimento },
      dt_reserva: dto.dt_reserva,
      qtd_lugares: dto.qtd_lugares,
    });
    console.log("Reserva criada: ", reserva);
    
    return this.reservaMesaLogRepository.save(reserva);
  }

  async findAll(): Promise<ReservaMesaLog[]> {
    return this.reservaMesaLogRepository.find({
      relations: ['estabelecimento', 'cliente'],
    });
  }

  async findOne(id: number): Promise<ReservaMesaLog> {
    const entity = await this.reservaMesaLogRepository.findOne({
      where: { id },
      relations: ['estabelecimento', 'cliente'],
    });
    if (!entity) {
      throw new NotFoundException(`ReservaMesaLog com ID ${id} não encontrado`);
    }
    return entity;
  }

  async update(id: number, dto: UpdateReservaMesaLogDto): Promise<ReservaMesaLog> {
    const partialEntity: Partial<ReservaMesaLog> = {};
    
    if (dto.dt_reserva) partialEntity.dt_reserva = dto.dt_reserva;
    if (dto.qtd_lugares) partialEntity.qtd_lugares = dto.qtd_lugares;
    if (dto.id_estabelecimento) partialEntity.estabelecimento = { id: dto.id_estabelecimento } as any;
    if (dto.id_cliente) partialEntity.cliente = { id: dto.id_cliente } as any;

    await this.reservaMesaLogRepository.update(id, partialEntity);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.reservaMesaLogRepository.delete(id);
  }
}