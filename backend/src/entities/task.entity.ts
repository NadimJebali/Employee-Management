import { ApiProperty } from "@nestjs/swagger";
import { Evaluation } from "src/entities/evaluation.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({ name: 'Tasks' })
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'task about something' }) 
    @Column()
    description: string;

    @ApiProperty({ example: "11/03/2025" }) 
    @Column()
    date: string;

    @ManyToOne(() => Evaluation, evaluation => evaluation.task, { onDelete: 'CASCADE' })
    evaluation: Evaluation;
    
}
