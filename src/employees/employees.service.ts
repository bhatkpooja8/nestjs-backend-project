import { HttpCode, Injectable } from '@nestjs/common';
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

@HttpCode(200)
getAllEmployees(): Employee[] {
    return this.employees;      
}

@HttpCode(200)
getEmployeeById(id: number){
    console.log("ID in service:", id);
    let ans= this.employees.find(emp => emp.id === id);
    console.log("Employee found:", ans);
    return ans
}

addEmployee(employee: Employee): Employee {
  this.employees.push(employee);
  return employee;
}

updateEmployee(id: number, data: Partial<Employee>) {
  const employee = this.getEmployeeById(id);
  if (!employee) return null;

  Object.assign(employee, data);
  return employee;
}

deleteEmployee(id: number) {
  this.employees = this.employees.filter(emp => emp.id !== id);
  return { message: 'Employee deleted successfully' };
}

}
