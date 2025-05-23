import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'Timesheets' })
export class Timesheet {
  @ApiProperty({ example: 1, description: 'Unique identifier for the timesheet' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '2025-05-04', description: 'Date of the timesheet entry' })
  @Column()
  date: string;

  @ApiProperty({ example: 8, description: 'Number of hours worked on the specified date' })
  @Column()
  hoursWorked: number;

  @ApiProperty({ example: 'Worked on project A', description: 'Optional description of the work done' })
  @Column({ nullable: true })
  description: string;

  @ApiProperty({ example: 'Holiday'})
  @Column({ nullable: true })
  status: string;

  @ApiProperty({ description: 'Timestamp of when the timesheet was created' })
  @CreateDateColumn()
  createdAt: Date;
  
  @ApiProperty({ description: 'Timestamp of the last update to the timesheet' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.timesheets, { onDelete: 'CASCADE' })
  user: User;
}
