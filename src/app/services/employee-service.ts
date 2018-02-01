import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';


/**
 * 
 * 
 * @export
 * @class EmployeeService
 */
@Injectable()
export class EmployeeService{

      private empList:Employee[] =[];
   

      getEmployees(): Employee[]
      { 
      return this.empList;
      }
        
      createEmployee(employee: Employee)
      {
      this.empList.unshift(employee);
      
      }
        
}