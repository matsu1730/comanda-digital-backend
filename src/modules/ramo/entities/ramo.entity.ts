import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Estabelecimento } from '../../estabelecimento/entities/estabelecimento.entity';

@Entity({ name: 'TB_RAMO' })
export class Ramo {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'nom_ramo' })
  nome: string;

  @OneToMany(() => Estabelecimento, (estabelecimento) => estabelecimento.ramo)
  estabelecimentos: Estabelecimento[];
}