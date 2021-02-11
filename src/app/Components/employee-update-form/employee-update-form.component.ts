import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeServiceService } from 'src/app/Services/employee-service.service';
import { ReferenceService } from 'src/app/Services/reference.service';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { NgForm } from '@angular/forms';
import { ReferenceType } from 'src/app/Models/referenceType';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-update-form',
  templateUrl: './employee-update-form.component.html',
  styleUrls: ['./employee-update-form.component.css']
})
export class EmployeeUpdateFormComponent implements OnInit {
  employee: Employee;
  response: any;
  employeeTypes: ReferenceType[] = [];
  id: number;
  constructor(private employeeService: EmployeeServiceService, private referenceService: ReferenceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.referenceService.getAllReferencesdes().subscribe(data=>
    // this.employeeTypes.push(data.description));
    //console.log(this.employeeTypes);
    this.id = this.route.snapshot.params.id;
    this.searchById(this.id);
  this.getReferences();
  }
  getReferences() {
    this.referenceService.getAllReferences().subscribe(data=>
      this.employeeTypes=data);
  }
  searchById(id: number) {
    //this.search=Number(id.trim());
    this.employeeService.getEmployeeById(id).subscribe(data => 
      this.employee = data[0]
    
    );
  }
  onSubmit(form: NgForm) {
    /*this.employee.id = form.value.id;
    this.employee.code = form.value.code;
    this.employee.name = form.value.name;
    this.employee.employeeType = form.value.employeeType;
    this.employee.email = form.value.email;
    this.employee.dob = form.value.dob;
    this.employee.gender = form.value.gender;
    this.employee.active = form.value.active;*/

console.log("eeee"+ JSON.stringify(form.value))

    this.employeeService.updateEmployee(this.id,form.value).subscribe(data => 
      this.response = data);
      form.reset();
  }

}
