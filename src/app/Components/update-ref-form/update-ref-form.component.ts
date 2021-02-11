import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReferenceType } from 'src/app/Models/referenceType';
import { ReferenceService } from 'src/app/Services/reference.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-ref-form',
  templateUrl: './update-ref-form.component.html',
  styleUrls: ['./update-ref-form.component.css']
})
export class UpdateRefFormComponent implements OnInit {
  type: ReferenceType;
  response: any;
  id: number;
  constructor(private referenceService: ReferenceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.searchById(this.id);

  }
  onSubmit(form: NgForm) {
/*this.type.id=form.value.id;
this.type.code=form.value.code;
this.type.description=form.value.description;*/
    this.referenceService.updateReference(this.id,form.value).subscribe(data =>{
      this.response = data;

      form.reset();
    });
  }
  searchById(id: number) {
    //  this.search=Number(id.trim());
    this.referenceService.getReferenceById(id).subscribe(data =>{
      /*this.type.id = data.id;
      this.type.code = data.code;
      this.type.description = data.description;*/
      this.type=data[0];
      console.log(data);
    });
      

  }

}
