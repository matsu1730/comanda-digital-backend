import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Estabelecimento } from '../../estabelecimento/entities/estabelecimento.entity';

@Entity({ name: 'tb_ramo' })
export class Ramo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_ramo' })
  nome: string;

  @OneToMany(() => Estabelecimento, (estabelecimento) => estabelecimento.ramo)
  estabelecimentos: Estabelecimento[];
}