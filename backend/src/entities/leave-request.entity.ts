import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/entities/user.entity";
import { LeaveStatus } from "src/enums/leaveStatus.enum";
import { LeaveType } from "src/enums/leaveType.enum";
import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, Entity } from "typeorm";

@Entity({ name: 'LeaveRequest' })
export class LeaveRequest {

@ApiProperty({ example: '1' })
@PrimaryGeneratedColumn()
id: number;

@ApiProperty({ enum: LeaveType })
@Column({ type: 'enum', enum: LeaveType })
type: LeaveType;

@ApiProperty({ example: '2025-05-10' })
@Column({ type: 'date' })
startDate: string;

@ApiProperty({ example: '2026-05-10' })
@Column({ type: 'date' })
endDate: string;

@ApiProperty({ example: 'i pooped my pants' })
@Column({ type: 'text', nullable: true })
reason: string;

@ApiProperty({ enum: LeaveStatus })
@Column({ type: 'enum', enum: LeaveStatus, default: LeaveStatus.PENDING })
status: LeaveStatus;

@ApiProperty()
@CreateDateColumn()
createdAt: Date;

@ApiProperty()
@UpdateDateColumn()
updatedAt: Date;

@ManyToOne(() => User, (user) => user.leaveRequests, { onDelete: 'CASCADE' })
user: User;
}
