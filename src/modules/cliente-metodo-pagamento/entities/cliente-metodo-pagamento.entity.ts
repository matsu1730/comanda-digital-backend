import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { MetodoPagamento } from '../../metodo-pagamento/entities/metodo-pagamento.entity';
import { Pagamento } from '../../pagamento/entities/pagamento.entity';

@Entity({ name: 'tb_cliente_metodo_pagamento' })
export class ClienteMetodoPagamento {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'num_cartao' })
  numeroCartao: string;

  @Column({ name: 'dt_validade', type: 'date' })
  validade: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.metodosPagamento)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;

  @ManyToOne(() => MetodoPagamento, (metodoPagamento) => metodoPagamento.clienteMetodosPagamento)
  @JoinColumn({ name: 'id_metodo_pagamento' })
  metodoPagamento: MetodoPagamento;

  @OneToMany(() => Pagamento, (pagamento) => pagamento.clienteMetodoPagamento)
  pagamentos: Pagamento[];
}
