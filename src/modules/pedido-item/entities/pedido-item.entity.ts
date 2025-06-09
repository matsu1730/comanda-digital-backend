import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Produto } from '../../produto/entities/produto.entity';

@Entity({ name: 'TB_PEDIDO_ITEM' })
export class PedidoItem {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'num_quantidade' })
  quantidade: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.itens)
  @JoinColumn({ name: 'ID_PEDIDO' })
  pedido: Pedido;

  @ManyToOne(() => Produto, (produto) => produto.pedidoItens)
  @JoinColumn({ name: 'ID_PRODUTO' })
  produto: Produto;
}
