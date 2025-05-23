// src/evaluation/entities/evaluation.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Task } from 'src/entities/task.entity';

@Entity({ name: 'Evaluations' })
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 4 })
  @Column('int')
  communication: number;

  @ApiProperty({ example: 5 })
  @Column('int')
  productivity: number;

  @ApiProperty({ example: 3 })
  @Column('int')
  teamwork: number;

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  comments: string;

  @ApiProperty({ example: 9 })
  @Column('int')
  nbTaches: number;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, user => user.evaluations, { onDelete: 'CASCADE' })
  employee: User;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  evaluator: User;

  @ApiProperty({ type: () => [Task] })
  @OneToMany(() => Task, (task) => task.evaluation)
  task: Task[];
}
