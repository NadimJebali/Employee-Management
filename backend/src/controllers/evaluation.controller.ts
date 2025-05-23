import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluationService } from '../services/evaluation.service';
import { CreateEvaluationDto } from '../dto/create-evaluation.dto';
import { UpdateEvaluationDto } from '../dto/update-evaluation.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorator/role.decorator';
import { Role } from 'src/enums/roles.enum';

@ApiTags('Evaluations')
@ApiBearerAuth('access-token') 
@Controller('evaluation')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Roles(Role.HR, Role.ADMIN)
  @Post()
  @ApiOperation({ summary: 'Create a new evaluation for an employee' })
  create(@Body() createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationService.create(createEvaluationDto);
  }
  @Roles(Role.HR, Role.ADMIN)
  @Get()
  @ApiOperation({ summary: 'Get all evaluations' })
  findAll() {
    return this.evaluationService.findAll();
  }

  @Roles(Role.EMPLOYEE, Role.ADMIN, Role.HR)
  @Get(':id')
  @ApiOperation({ summary: 'Get a specific evaluation by ID' })
  findOne(@Param('id') id: string) {
    return this.evaluationService.findOne(+id);
  }
  
  @Roles(Role.HR, Role.ADMIN)
  @Patch(':id')
  @ApiOperation({ summary: 'Update an evaluation by ID' })
  update(@Param('id') id: string, @Body() updateEvaluationDto: UpdateEvaluationDto) {
    return this.evaluationService.update(+id, updateEvaluationDto);
  }

  @Roles(Role.HR, Role.ADMIN)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an evaluation by ID' })
  remove(@Param('id') id: string) {
    return this.evaluationService.remove(+id);
  }
}
