import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { ClienteMetodoPagamento } from '../../cliente-metodo-pagamento/entities/cliente-metodo-pagamento.entity';

@Entity({ name: 'TB_CLIENTE' })
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'num_cpf' })
  cpf: string;

  @Column({ name: 'nom_cliente' })
  nome: string;

  @Column({ name: 'des_email' })
  email: string;

  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos: Pedido[];

  @OneToMany(() => ClienteMetodoPagamento, (clienteMetodoPagamento) => clienteMetodoPagamento.cliente)
  metodosPagamento: ClienteMetodoPagamento[];
}
