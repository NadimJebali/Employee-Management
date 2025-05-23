import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Typeorm } from './config/Typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './moduls/user.module';
import { AdminModule } from './moduls/admin.module';
import { AuthModule } from './auth/auth.module';
import { LeaveRequestModule } from './moduls/leave-request.module';
import { EvaluationModule } from './moduls/evaluation.module';
import { TimesheetModule } from './moduls/timesheet.module';
import { TasksModule } from './moduls/tasks.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/role.guard';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [ConfigModule.forRoot({isGlobal : true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:Typeorm
    }),
    UserModule,
    AdminModule,
    AuthModule,
    LeaveRequestModule,
    EvaluationModule,
    TimesheetModule,
    TasksModule
  ],
  controllers: [AppController],
  providers: [
    {
    provide: APP_GUARD,
    useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    AppService
  ],
})
export class AppModule {}
