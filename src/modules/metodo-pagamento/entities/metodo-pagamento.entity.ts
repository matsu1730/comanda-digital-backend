import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ClienteMetodoPagamento } from '../../cliente-metodo-pagamento/entities/cliente-metodo-pagamento.entity';

@Entity({ name: 'TB_METODO_PAGAMENTO' })
export class MetodoPagamento {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'nom_metodo' })
  nome: string;

  @OneToMany(() => ClienteMetodoPagamento, (clienteMetodoPagamento) => clienteMetodoPagamento.metodoPagamento)
  clienteMetodosPagamento: ClienteMetodoPagamento[];
}
