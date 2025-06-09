import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoItemService } from './pedido-item.service';
import { CreatePedidoItemDto } from './dto/create-pedido-item.dto';
import { UpdatePedidoItemDto } from './dto/update-pedido-item.dto';

@Controller('pedido-item')
export class PedidoItemController {
  constructor(private readonly pedidoItemService: PedidoItemService) {}

  @Post()
  create(@Body() createPedidoItemDto: CreatePedidoItemDto) {
    return this.pedidoItemService.create(createPedidoItemDto);
  }

  @Get()
  findAll() {
    return this.pedidoItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoItemDto: UpdatePedidoItemDto) {
    return this.pedidoItemService.update(+id, updatePedidoItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoItemService.remove(+id);
  }
}