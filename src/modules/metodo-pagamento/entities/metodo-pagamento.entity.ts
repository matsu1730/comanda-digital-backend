import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ClienteMetodoPagamento } from '../../cliente-metodo-pagamento/entities/cliente-metodo-pagamento.entity';

@Entity({ name: 'tb_metodo_pagamento' })
export class MetodoPagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_metodo' })
  nome: string;

  @OneToMany(() => ClienteMetodoPagamento, (clienteMetodoPagamento) => clienteMetodoPagamento.metodoPagamento)
  clienteMetodosPagamento: ClienteMetodoPagamento[];
}
