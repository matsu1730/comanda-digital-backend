import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { ClienteMetodoPagamento } from '../../cliente-metodo-pagamento/entities/cliente-metodo-pagamento.entity';

@Entity({ name: 'TB_PAGAMENTO' })
export class Pagamento {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'val_pagamento', type: 'decimal' })
  valor: number;

  @Column({ name: 'dt_pagamento', type: 'timestamp' })
  dataPagamento: Date;

  @OneToOne(() => Pedido, (pedido) => pedido.pagamento)
  @JoinColumn({ name: 'ID_PEDIDO' })
  pedido: Pedido;

  @ManyToOne(() => ClienteMetodoPagamento, (clienteMetodoPagamento) => clienteMetodoPagamento.pagamentos)
  @JoinColumn({ name: 'ID_CLIENTE_METODO_PAGAMENTO' })
  clienteMetodoPagamento: ClienteMetodoPagamento;
}
