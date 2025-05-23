import { Body, Controller, Delete, Get, Param, Post, Put, SetMetadata, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { Roles } from 'src/decorator/role.decorator';
import { Role } from 'src/enums/roles.enum';


@ApiTags('Users')
@ApiBearerAuth('access-token') 
@Roles(Role.HR, Role.ADMIN)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  create(@Body() createUserDto: CreateUserDto){
    return this.userService.create(createUserDto);
  }


  @Get()
  @Roles(Role.EMPLOYEE,Role.ADMIN,Role.HR)
  @ApiOperation({ summary: 'Get all users' })
  findAll(){
    return this.userService.findAll();
  }

 
  @Get(':id')
  @Roles(Role.EMPLOYEE,Role.ADMIN,Role.HR)
  @ApiOperation({ summary: 'Get user by ID' })
  findOne(@Param('id') id: string){
    return this.userService.findOne(+id);
  }


  @Put(':id')
  @ApiOperation({ summary: 'Update user by ID' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  
  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }

  @Roles(Role.HR, Role.ADMIN, Role.EMPLOYEE)
  @Get('leave-requests/:id')
  @ApiOperation({ summary: 'Get all leave request by user id' })
  getEmployeeLeaveRequests(@Param('id') id: string) {
    return this.userService.getUserLeaveRequest(+id);
  }

  @Roles(Role.HR, Role.ADMIN, Role.EMPLOYEE)
  @Get('evaluation/:id')
  @ApiOperation({ summary: 'Get all Evaluation by user id' })
  getEmployeeEvaluation(@Param('id') id: string) {
    return this.userService.getUserEvaluation(+id);
  }

  @Roles(Role.HR, Role.ADMIN, Role.EMPLOYEE)
  @Get('timesheet/:id')
  @ApiOperation({ summary: 'Get all Evaluation by user id' })
  getEmployeeTimesheet(@Param('id') id: string) {
    return this.userService.getUserTimesheet(+id);
  }
  
}