import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_categoria_produto')
export class CategoriaProduto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom_categoria: string;
}
