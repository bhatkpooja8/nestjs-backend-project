import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { Employee, EmployeesService } from './employees.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';

@UseGuards(JwtAuthGuard)
@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) { }

    @Get('all')
    getAllEmployees() {
        return this.employeesService.getAllEmployees();
    }

    @Get(':id')
    getEmployeeById(@Param('id', ParseIntPipe) id: number) {
        console.log("ID:", typeof id, id);
        return this.employeesService.getEmployeeById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createEmployee(@Body() body: Employee) {
        return this.employeesService.addEmployee(body);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Put(':id')
    updateEmployee(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: Partial<Employee>,
    ) {
        return this.employeesService.updateEmployee(id, body);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    deleteEmployee(@Param('id', ParseIntPipe) id: number) {
        return this.employeesService.deleteEmployee(id);
    }
}

