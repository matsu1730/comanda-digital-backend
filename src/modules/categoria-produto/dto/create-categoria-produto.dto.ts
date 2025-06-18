import { IsNotEmpty } from 'class-validator';

export class CreateCategoriaProdutoDto {
  @IsNotEmpty()
  nom_categoria: string;
}
