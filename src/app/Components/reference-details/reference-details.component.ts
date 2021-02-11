import { Component, OnInit } from '@angular/core';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { ReferenceService } from 'src/app/Services/reference.service';
import { Employee } from 'src/app/Models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reference-details',
  templateUrl: './reference-details.component.html',
  styleUrls: ['./reference-details.component.css']
})
export class ReferenceDetailsComponent implements OnInit {
references:Reference[]=[];
response:any;
  constructor(private referenceService:ReferenceService,private router:Router) { }

  ngOnInit(): void {
  this.referenceService.getAllReferences().subscribe((response: any) => {      
    this.references.push(...response);
    console.log("users array", this.references);  
  });           
  }
  deleteRef(id:number){
    this.referenceService.removeReference(id).subscribe(data=>
      this.response=data);
  }
  goToForm(id:number){
    this.router.navigateByUrl(`/updateRef/${id}`);
  }
}
