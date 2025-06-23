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
import { CategoriaProduto } from '../../categoria-produto/entities/categoria-produto.entity';

@Entity('tb_produto')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_produto' })
  nome: string;

  @Column({ name: 'des_produto' })
  descricao: string;

  @Column({ name: 'val_produto', type: 'decimal' })
  valor: number;

  @ManyToOne(
    () => { return Estabelecimento; },
    (estabelecimento) => estabelecimento.produtos,
  )
  @JoinColumn({ name: 'id_estabelecimento' })
  estabelecimento: Estabelecimento;

  @ManyToOne(() => { return CategoriaProduto; })
  @JoinColumn({ name: 'id_categoria_produto' })
  categoriaProduto: CategoriaProduto;

  @OneToMany(() => PedidoItem, (pedidoItem) => pedidoItem.produto)
  pedidoItens: PedidoItem[];
}
