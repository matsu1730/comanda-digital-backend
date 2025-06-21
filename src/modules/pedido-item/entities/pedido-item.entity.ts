import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Produto } from '../../produto/entities/produto.entity';

@Entity({ name: 'TB_PEDIDO_ITEM' })
export class PedidoItem {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'num_quantidade' })
  quantidade: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.itens)
  @ManyToOne(() => Pedido, (pedido) => pedido.itens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_pedido' })
  pedido: Pedido;

  @ManyToOne(() => Produto, (produto) => produto.pedidoItens)
  @JoinColumn({ name: 'id_produto' })
  produto: Produto;
}
