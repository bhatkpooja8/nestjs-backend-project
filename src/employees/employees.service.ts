import { Injectable } from '@nestjs/common';
export interface Employee {
  id: number
  name: string
  role: string
}
@Injectable()
export class EmployeesService {
private employees: Employee[]= [
    {id:1, name:"Pooja Bhat K", role:"Software Engineer"},
    {id:2, name:"John Doe", role:"Project Manager"},
    {id:3, name:"Jane Smith", role:"Designer"}
]

getAllEmployees(): Employee[] {
    return this.employees;      
}

getEmployeeById(id: number){
    console.log("ID in service:", id);
    let ans= this.employees.find(emp => emp.id === id);
    console.log("Employee found:", ans);
    return ans
}

}
