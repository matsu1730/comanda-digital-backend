import { IsNotEmpty } from 'class-validator';

export class CreateStatusPedidoDto {
  @IsNotEmpty()
  nom_status: string;
}
