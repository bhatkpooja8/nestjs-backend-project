import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService:EmployeesService){}

    @Get('all') 
    getAllEmployees(){
        return this.employeesService.getAllEmployees();
    }

    @Get(':id')
    getEmployeeById(@Param('id',ParseIntPipe) id: number){
        console.log("ID:", typeof id, id);
        return this.employeesService.getEmployeeById(id)
    }
}

