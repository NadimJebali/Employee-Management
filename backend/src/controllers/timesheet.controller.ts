import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimesheetService } from '../services/timesheet.service';
import { CreateTimesheetDto } from '../dto/create-timesheet.dto';
import { UpdateTimesheetDto } from '../dto/update-timesheet.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { Timesheet } from '../entities/timesheet.entity';
import { Roles } from 'src/decorator/role.decorator';
import { Role } from 'src/enums/roles.enum';

@ApiTags('Timesheets')
@ApiBearerAuth('access-token') 
@Controller('timesheets')
export class TimesheetController {
  constructor(private readonly service: TimesheetService) {}

  @Roles(Role.HR, Role.ADMIN, Role.EMPLOYEE)
  @Post()
  @ApiOperation({ summary: 'Create a new timesheet entry' })
  @ApiBody({ type: CreateTimesheetDto })
  create(@Body() dto: CreateTimesheetDto) {
    return this.service.create(dto);
  }

  @Roles(Role.HR, Role.ADMIN)
  @Get()
  @ApiOperation({ summary: 'Get all timesheet entries' })
  findAll() {
    return this.service.findAll();
  }

  @Roles(Role.HR, Role.ADMIN, Role.EMPLOYEE)
  @Get(':id')
  @ApiOperation({ summary: 'Get a timesheet entry by ID' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Roles(Role.HR, Role.ADMIN)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a timesheet entry by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateTimesheetDto })
  update(@Param('id') id: number, @Body() dto: UpdateTimesheetDto) {
    return this.service.update(id, dto);
  }

  @Roles(Role.HR, Role.ADMIN, Role.EMPLOYEE)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a timesheet entry by ID' })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
