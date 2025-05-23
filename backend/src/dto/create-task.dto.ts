import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({ example: 'task about something' })
    description: string;
  
    @ApiProperty({ example: '11/03/2025' })
    date: string;
  
    @ApiProperty({ example: 1 })
    evaluationId: number;
}
