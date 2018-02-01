

import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee-service';

/**
 * 
 * 
 * @export
 * @class EmployeeDetailComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
  
})

export class EmployeeDetailComponent implements OnInit {


  // @Input() empdetail;
  employee:Employee[];

  private searchData: string;
  
  imageUrl = 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg';
  //employeeList: Employee;
  
  
  constructor(private employeService: EmployeeService) { }

  ngOnInit() {
    this.searchData = '';
    this.employee = this.employeService.getEmployees();
    
    console.log(this.employee);
  }

}
