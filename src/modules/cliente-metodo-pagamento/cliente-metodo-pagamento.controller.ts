import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClienteMetodoPagamentoService } from './cliente-metodo-pagamento.service';
import { CreateClienteMetodoPagamentoDto } from './dto/create-cliente-metodo-pagamento.dto';
import { UpdateClienteMetodoPagamentoDto } from './dto/update-cliente-metodo-pagamento.dto';

@Controller('cliente-metodo-pagamento')
export class ClienteMetodoPagamentoController {
  constructor(private readonly clientePetodoPagamentoService: ClienteMetodoPagamentoService) {}

  @Post()
  create(@Body() createClienteMetodoPagamentoDto: CreateClienteMetodoPagamentoDto) {
    return this.clientePetodoPagamentoService.create(createClienteMetodoPagamentoDto);
  }

  @Get()
  findAll() {
    return this.clientePetodoPagamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientePetodoPagamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteMetodoPagamentoDto: UpdateClienteMetodoPagamentoDto) {
    return this.clientePetodoPagamentoService.update(+id, updateClienteMetodoPagamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientePetodoPagamentoService.remove(+id);
  }
}