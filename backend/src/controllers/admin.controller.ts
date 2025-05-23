import { Controller, Get, Post, Body, Patch, Param, Delete, SetMetadata, UseGuards, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Admin } from '../entities/admin.entity';
import { AdminService } from 'src/services/admin.service';
import { Roles } from 'src/decorator/role.decorator';
import { Role } from 'src/enums/roles.enum';


@ApiTags('Admin')
@ApiBearerAuth('access-token') 
@Roles(Role.ADMIN)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Create admin' })
  @Post()
  create(@Body() createAdminDto: Admin) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: 'Get all admins' })
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: 'Get all Get admin by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update admin by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: Admin) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: 'Delete admin by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.delete(+id);
  }
}
