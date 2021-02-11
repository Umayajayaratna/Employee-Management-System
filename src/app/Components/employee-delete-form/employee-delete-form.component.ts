import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { ReferenceService } from 'src/app/Services/reference.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-employee-delete-form',
  templateUrl: './employee-delete-form.component.html',
  styleUrls: ['./employee-delete-form.component.css']
})
export class EmployeeDeleteFormComponent implements OnInit {
employee:Employee;
response:any;
employeeTypes:string[]=[];
search:number;
  constructor(private employeeService:EmployeeServiceService,private referenceService:ReferenceService) { }

  ngOnInit(): void {
    
  }
  
    deleteEmployee(id:number){
      this.employeeService.deleteEmployee(id).subscribe(data=>
        this.response=data);
    }
    searchById(id:string){
      this.search = Number(id);
      this.employeeService.getEmployeeById(this.search).subscribe(data=>
        //this.employee=data,
       //error=>console.log(error) 
       console.log(data));
       console.log(this.search);
    }
}
