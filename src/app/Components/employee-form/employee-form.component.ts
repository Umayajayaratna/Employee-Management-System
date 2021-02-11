import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { NgForm, FormsModule } from '@angular/forms';
import { EmployeeUpdateFormComponent } from '../employee-update-form/employee-update-form.component';
import { ReferenceService } from 'src/app/Services/reference.service';
import { ReferenceType } from 'src/app/Models/referenceType';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee;
  employeeTypes: ReferenceType[]=[];
  response: any;
  constructor(private employeeService: EmployeeServiceService,private referenceService:ReferenceService) { }

  ngOnInit(): void {
    this.referenceService.getAllReferences().subscribe(data=>
      this.employeeTypes=data);
     
  }
  onSubmit(form:NgForm) {
    
  /*this.employee.code=form.value.code;
  this.employee.name=form.value.name;
  this.employee.employeeType=form.value.employeeType;
  this.employee.email=form.value.email;
  this.employee.dob=form.value.dob;
  this.employee.gender=form.value.gender;
  this.employee.active=form.value.active;*/
    this.employeeService.addEmployee(form.value).subscribe(data =>{
      this.response = data;
      form.reset();
    });
      
  }
  check(e){
    console.log(e)
    console.log(e.target.checked)
    console.log(e.target.value)
  }
}
