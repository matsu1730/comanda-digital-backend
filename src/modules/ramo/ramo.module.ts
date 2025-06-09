import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RamoService } from './ramo.service';
import { RamoController } from './ramo.controller';
import { Ramo } from './entities/ramo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ramo])],
  controllers: [RamoController],
  providers: [RamoService],
})
export class RamoModule {}