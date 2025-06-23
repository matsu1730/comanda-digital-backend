import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Ramo } from '../../ramo/entities/ramo.entity';
import { Produto } from '../../produto/entities/produto.entity';
import { Pedido } from 'src/modules/pedido/entities/pedido.entity';

@Entity({ name: 'tb_estabelecimento' })
export class Estabelecimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_estabelecimento' })
  nome: string;

  @Column({ name: 'num_cnpj' })
  cnpj: string;

  @Column({ name: 'des_endereco' })
  endereco: string;

  @ManyToOne(() => Ramo, (ramo) => ramo.estabelecimentos)
  @JoinColumn({ name: 'id_ramo' })
  ramo: Ramo;

  @OneToMany(() => Produto, (produto) => produto.estabelecimento)
  produtos: Produto[];

  @OneToMany(() => Pedido, (pedido) => pedido.estabelecimento)
  pedidos: Pedido[];
}