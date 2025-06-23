import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { ClienteMetodoPagamento } from '../../cliente-metodo-pagamento/entities/cliente-metodo-pagamento.entity';

@Entity({ name: 'tb_pagamento' })
export class Pagamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'val_pagamento', type: 'decimal' })
  valor: number;

  @Column({ name: 'dt_pagamento', type: 'timestamp' })
  dataPagamento: Date;

  @OneToOne(() => Pedido, (pedido) => pedido.pagamento)
  @JoinColumn({ name: 'id_pedido' })
  pedido: Pedido;

  @ManyToOne(() => ClienteMetodoPagamento, (clienteMetodoPagamento) => clienteMetodoPagamento.pagamentos)
  @JoinColumn({ name: 'id_cliente_metodo_pagamento' })
  clienteMetodoPagamento: ClienteMetodoPagamento;
}
