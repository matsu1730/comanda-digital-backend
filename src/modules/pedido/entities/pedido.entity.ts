import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Estabelecimento } from '../../estabelecimento/entities/estabelecimento.entity';
import { PedidoItem } from 'src/modules/pedido-item/entities/pedido-item.entity';
import { Pagamento } from 'src/modules/pagamento/entities/pagamento.entity';

@Entity({ name: 'TB_PEDIDO' })
export class Pedido {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'dt_criacao', type: 'timestamp' })
  dataCriacao: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
  @JoinColumn({ name: 'ID_CLIENTE' })
  cliente: Cliente;

  @ManyToOne(() => Estabelecimento, (estabelecimento) => estabelecimento.pedidos)
  @JoinColumn({ name: 'ID_ESTABELECIMENTO' })
  estabelecimento: Estabelecimento;

  @OneToMany(() => PedidoItem, (pedidoItem) => pedidoItem.pedido)
  itens: PedidoItem[];

  @OneToOne(() => Pagamento, (pagamento) => pagamento.pedido)
  pagamento: Pagamento;
}