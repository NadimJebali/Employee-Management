import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeaveRequestService } from '../services/leave-request.service';
import { CreateLeaveRequestDto } from '../dto/create-leave-request.dto';
import { UpdateLeaveRequestDto } from '../dto/update-leave-request.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LeaveRequest } from '../entities/leave-request.entity';
import { Roles } from 'src/decorator/role.decorator';
import { Role } from 'src/enums/roles.enum';

@ApiTags('leave-request')
@ApiBearerAuth('access-token') 
@Controller('leave-request')
export class LeaveRequestController {
  constructor(private readonly leaveRequestService: LeaveRequestService) {}

  @Roles(Role.HR, Role.ADMIN, Role.EMPLOYEE)
  @Post()
  @ApiOperation({ summary: 'Create a new leave request' })
  create(@Body() createLeaveRequestDto: CreateLeaveRequestDto) {
    return this.leaveRequestService.create(createLeaveRequestDto);
  }

  @Roles(Role.HR, Role.ADMIN)
  @Get()
  @ApiOperation({ summary: 'Get all leave requests' })
  findAll() {
    return this.leaveRequestService.findAll();
  }

  @Roles(Role.HR, Role.ADMIN, Role.EMPLOYEE)
  @Get(':id')
  @ApiOperation({ summary: 'Get a leave request by ID' })
  findOne(@Param('id') id: string) {
    return this.leaveRequestService.findOne(+id);
  }

  @Roles(Role.HR, Role.ADMIN)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a leave request by ID' })
  update(@Param('id') id: string, @Body() updateLeaveRequestDto: UpdateLeaveRequestDto) {
    return this.leaveRequestService.update(+id, updateLeaveRequestDto);
  }

  @Roles(Role.HR, Role.ADMIN)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a leave request by ID' })
  remove(@Param('id') id: string) {
    return this.leaveRequestService.remove(+id);
  }
}
