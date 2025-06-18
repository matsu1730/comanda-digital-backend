import { Module } from '@nestjs/common';
import { ReservaMesaLogService } from './reserva-mesa-log.service';
import { ReservaMesaLogController } from './reserva-mesa-log.controller';

@Module({
  controllers: [ReservaMesaLogController],
  providers: [ReservaMesaLogService]
})
export class ReservaMesaLogModule {}
