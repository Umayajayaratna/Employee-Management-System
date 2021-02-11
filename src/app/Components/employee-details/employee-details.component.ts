import { Component, OnInit } from '@angular/core';
import {Employee} from 'src/app/Models/employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees:Employee[]=[];
  response:any;
  
  constructor(private employeeService:EmployeeServiceService,private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data=>
      this.employees=data);
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>
      this.response=data);
  }
  goToForm(id:number){
    this.router.navigateByUrl(`/update/${id}`);
  }
  
}
