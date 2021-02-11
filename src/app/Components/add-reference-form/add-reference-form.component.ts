import { Component, OnInit } from '@angular/core';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { NgForm } from '@angular/forms';
import { ReferenceType } from 'src/app/Models/referenceType';
import { ReferenceService } from 'src/app/Services/reference.service';

@Component({
  selector: 'app-add-reference-form',
  templateUrl: './add-reference-form.component.html',
  styleUrls: ['./add-reference-form.component.css']
})
export class AddReferenceFormComponent implements OnInit {
referenceType:any;
response:any;
  constructor(private referenceService:ReferenceService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
// this.referenceType.code=form.value.code;
// this.referenceType.description=form.value.description;
this.referenceService.addReference(form.value).subscribe(data=>{
  this.response=data;
  form.reset();
});
 
  }
}
