import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRamoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}