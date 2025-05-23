import { Module } from '@nestjs/common';
import { TimesheetService } from '../services/timesheet.service';
import { TimesheetController } from '../controllers/timesheet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Timesheet } from '../entities/timesheet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Timesheet, User])],
  controllers: [TimesheetController],
  providers: [TimesheetService],
  exports: [TimesheetService]
})
export class TimesheetModule {}
