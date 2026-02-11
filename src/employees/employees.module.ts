import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { AuthModule } from 'src/auth/auth/auth.module';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService,JwtAuthGuard,RolesGuard],
imports: [AuthModule]
})
export class EmployeesModule {}
