import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Estabelecimento } from '../../estabelecimento/entities/estabelecimento.entity';
import { Cliente } from '../../cliente/entities/cliente.entity';

@Entity('tb_reserva_mesa_log')
export class ReservaMesaLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  dt_reserva: Date;

  @Column()
  qtd_lugares: number;

  @ManyToOne(() => Estabelecimento)
  @JoinColumn({ name: 'id_estabelecimento' })
  estabelecimento: Estabelecimento;

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;
}