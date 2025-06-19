import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaMesaLogService } from './reserva-mesa-log.service';
import { ReservaMesaLogController } from './reserva-mesa-log.controller';
import { ReservaMesaLog } from './entities/reserva-mesa-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaMesaLog])],
  controllers: [ReservaMesaLogController],
  providers: [ReservaMesaLogService]
})
export class ReservaMesaLogModule {}