import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Estabelecimento } from '../../estabelecimento/entities/estabelecimento.entity';
import { StatusPedido } from '../../status-pedido/entities/status-pedido.entity';
import { PedidoItem } from '../../pedido-item/entities/pedido-item.entity';
import { Pagamento } from '../../pagamento/entities/pagamento.entity';

@Entity('tb_pedido')
export class Pedido {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ManyToOne(() => Estabelecimento)
  @JoinColumn({ name: 'id_estabelecimento' })
  estabelecimento: Estabelecimento;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;

  @ManyToOne(() => StatusPedido)
  @JoinColumn({ name: 'id_status_pedido' })
  statusPedido: StatusPedido;

  @CreateDateColumn({ name: 'dt_criacao' })
  dtCriacao: Date;

  @OneToMany(() => PedidoItem, (item) => item.pedido)
  itens: PedidoItem[];

  @OneToOne(() => Pagamento, (pagamento) => pagamento.pedido)
  pagamento: Pagamento;
}
