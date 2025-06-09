import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Ramo } from '../modules/ramo/entities/ramo.entity';
import { Estabelecimento } from '../modules/estabelecimento/entities/estabelecimento.entity';
import { Produto } from '../modules/produto/entities/produto.entity';
import { Cliente } from '../modules/cliente/entities/cliente.entity';
import { Pedido } from '../modules/pedido/entities/pedido.entity';
import { PedidoItem } from '../modules/pedido-item/entities/pedido-item.entity';
import { MetodoPagamento } from '../modules/metodo-pagamento/entities/metodo-pagamento.entity';
import { ClienteMetodoPagamento } from '../modules/cliente-metodo-pagamento/entities/cliente-metodo-pagamento.entity';
import { Pagamento } from '../modules/pagamento/entities/pagamento.entity';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'comanda_digital',
  entities: [
    Ramo,
    Estabelecimento,
    Produto,
    Cliente,
    Pedido,
    PedidoItem,
    MetodoPagamento,
    ClienteMetodoPagamento,
    Pagamento,
  ],
  synchronize: true,
  logging: true,
};

export default ormConfig;