import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn, OneToMany,
} from 'typeorm';
import { Estabelecimento } from '../../estabelecimento/entities/estabelecimento.entity';
import { PedidoItem } from '../../pedido-item/entities/pedido-item.entity';

@Entity({ name: 'TB_PRODUTO' })
export class Produto {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'nom_produto' })
  nome: string;

  @Column({ name: 'des_produto' })
  descricao: string;

  @Column({ name: 'val_produto', type: 'decimal' })
  valor: number;

  @ManyToOne(
    () => {
      return Estabelecimento;
    },
    (estabelecimento) => estabelecimento.produtos,
  )
  @JoinColumn({ name: 'ID_ESTABELECIMENTO' })
  estabelecimento: Estabelecimento;

  @OneToMany(() => PedidoItem, (pedidoItem) => pedidoItem.produto)
  pedidoItens: PedidoItem[];
}