import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/enums/roles.enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LeaveRequest } from "./leave-request.entity";
import { Evaluation } from "src/entities/evaluation.entity";
import { Timesheet } from "src/entities/timesheet.entity";
import { Min, min } from "class-validator";

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Gorblak' }) 
  @Column()
  firstName: string;

  @ApiProperty({ example: 'Da Choppa' }) 
  @Column()
  lastName: string;

  @ApiProperty({ example: 'gorblak@waaagh.krump' }) 
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: '**********' }) 
  @Column()
  password: string;

  @ApiProperty({ example: 42 }) 
  @Column()
  age: number;

  @ApiProperty({ example: '50648974' }) 
  @Column()
  phoneNumber: string;

  @ApiProperty({ example: 'WARBOSS' }) 
  @Column({type: 'enum', enum: Role, default: Role.EMPLOYEE})
  role: Role;

  @ApiProperty({ example: 10 }) 
  @Min(0)
  @Column()
  soldconge: number;
  
  @ApiProperty({ example: 'Kill squad' }) 
  @Column()
  department: string;

  @ApiProperty({ type: () => [LeaveRequest] })
  @OneToMany(() => LeaveRequest, (leaveRequest) => leaveRequest.user)
  leaveRequests: LeaveRequest[];

  @ApiProperty({ type: () => [Evaluation]  })
  @OneToMany(() => Evaluation, (evaluation) => evaluation.employee)
  evaluations: Evaluation[];

  @ApiProperty({ type: () => [Timesheet]  })
  @OneToMany(() => Timesheet, (timesheet) => timesheet.user)
  timesheets: Timesheet[];


}