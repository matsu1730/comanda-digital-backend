import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteMetodoPagamentoDto } from './create-cliente-metodo-pagamento.dto';

export class UpdateClienteMetodoPagamentoDto extends PartialType(CreateClienteMetodoPagamentoDto) {}