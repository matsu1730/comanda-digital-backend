import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEstabelecimentoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsNotEmpty()
  idRamo: number;
}