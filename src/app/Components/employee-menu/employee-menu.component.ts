import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-menu',
  templateUrl: './employee-menu.component.html',
  styleUrls: ['./employee-menu.component.css']
})
export class EmployeeMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  /*addEmployee(){
    this.router.navigateByUrl('/add');
  }
  updateEmployee(){
    this.router.navigateByUrl('/update');
  }
  deleteEmployee(){
    this.router.navigateByUrl('/remove');*/
  
}
