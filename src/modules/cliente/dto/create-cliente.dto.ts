import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}