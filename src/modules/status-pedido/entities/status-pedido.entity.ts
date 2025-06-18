import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_status_pedido')
export class StatusPedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom_status: string;
}
