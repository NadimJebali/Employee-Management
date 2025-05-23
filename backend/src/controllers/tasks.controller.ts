import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { Roles } from 'src/decorator/role.decorator';
import { Role } from 'src/enums/roles.enum';

@ApiBearerAuth('access-token') 
@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Roles(Role.HR, Role.ADMIN)
  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Roles(Role.HR, Role.ADMIN)
  @Get()
  @ApiOperation({ summary: 'Find all tasks' })
  findAll() {
    return this.taskService.findAll();
  }

  @Roles(Role.HR, Role.ADMIN, Role.EMPLOYEE)
  @Get('evaluation/:evaluationId')
  @ApiOperation({ summary: 'Find the tasks by evaluation id' })
  findByEvaluation(@Param('evaluationId') id: number) {
    return this.taskService.findByEvaluationId(id);
  }

  @Roles(Role.HR, Role.ADMIN)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete task by id' })
  delete(@Param('id') id: number) {
    return this.taskService.delete(id);
  }
}
