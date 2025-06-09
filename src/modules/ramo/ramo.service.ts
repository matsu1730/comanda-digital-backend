import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ramo } from './entities/ramo.entity';
import { CreateRamoDto } from './dto/create-ramo.dto';
import { UpdateRamoDto } from './dto/update-ramo.dto';

@Injectable()
export class RamoService {
  constructor(
    @InjectRepository(Ramo)
    private readonly ramoRepository: Repository<Ramo>,
  ) {}

  async create(createRamoDto: CreateRamoDto): Promise<Ramo> {
    const ramo = this.ramoRepository.create(createRamoDto);
    return this.ramoRepository.save(ramo);
  }

  async findAll(): Promise<Ramo[]> {
    return this.ramoRepository.find();
  }

  async findOne(id: number): Promise<Ramo> {
    const ramo = await this.ramoRepository.findOneBy({ id });
    if (!ramo) {
      throw new NotFoundException(`Ramo com ID ${id} não encontrado`);
    }
    return ramo;
  }

  async update(id: number, updateRamoDto: UpdateRamoDto): Promise<Ramo> {
    await this.ramoRepository.update(id, updateRamoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ramoRepository.delete(id);
  }
}