import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { MetodoPagamento } from '../../metodo-pagamento/entities/metodo-pagamento.entity';
import { Pagamento } from '../../pagamento/entities/pagamento.entity';

@Entity({ name: 'TB_CLIENTE_METODO_PAGAMENTO' })
export class ClienteMetodoPagamento {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'num_cartao' })
  numeroCartao: string;

  @Column({ name: 'dt_validade', type: 'date' })
  validade: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.metodosPagamento)
  @JoinColumn({ name: 'ID_CLIENTE' })
  cliente: Cliente;

  @ManyToOne(() => MetodoPagamento, (metodoPagamento) => metodoPagamento.clienteMetodosPagamento)
  @JoinColumn({ name: 'ID_METODO_PAGAMENTO' })
  metodoPagamento: MetodoPagamento;

  @OneToMany(() => Pagamento, (pagamento) => pagamento.clienteMetodoPagamento)
  pagamentos: Pagamento[];
}
