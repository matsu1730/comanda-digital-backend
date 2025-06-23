import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Produto } from '../../produto/entities/produto.entity';

@Entity({ name: 'tb_pedido_item' })
export class PedidoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'num_quantidade' })
  quantidade: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.itens)
  @JoinColumn({ name: 'id_pedido' })
  pedido: Pedido;

  @ManyToOne(() => Produto, (produto) => produto.pedidoItens)
  @JoinColumn({ name: 'id_produto' })
  produto: Produto;
}
