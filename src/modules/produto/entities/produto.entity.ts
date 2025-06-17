import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Estabelecimento } from '../../estabelecimento/entities/estabelecimento.entity';
import { PedidoItem } from '../../pedido-item/entities/pedido-item.entity';

@Entity('tb_produto')
export class Produto {
  @PrimaryGeneratedColumn({ name: 'id' })
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
  @JoinColumn({ name: 'id_estabelecimento' })
  estabelecimento: Estabelecimento;

  @OneToMany(() => PedidoItem, (pedidoItem) => pedidoItem.produto)
  pedidoItens: PedidoItem[];
}
