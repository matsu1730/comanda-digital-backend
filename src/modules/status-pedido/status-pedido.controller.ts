import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusPedidoService } from './status-pedido.service';
import { CreateStatusPedidoDto } from './dto/create-status-pedido.dto';
import { UpdateStatusPedidoDto } from './dto/update-status-pedido.dto';

@Controller('status-pedido')
export class StatusPedidoController {
  constructor(private readonly service: StatusPedidoService) {}

  @Post()
  create(@Body() dto: CreateStatusPedidoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateStatusPedidoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
