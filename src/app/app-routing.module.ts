import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EmployeeFormComponent } from './Components/employee-form/employee-form.component';
import { EmployeeUpdateFormComponent } from './Components/employee-update-form/employee-update-form.component';
import { EmployeeDeleteFormComponent } from './Components/employee-delete-form/employee-delete-form.component';
import { ReferenceDetailsComponent } from './Components/reference-details/reference-details.component';
import { AddReferenceFormComponent } from './Components/add-reference-form/add-reference-form.component';
import { UpdateRefFormComponent } from './Components/update-ref-form/update-ref-form.component';
//import { DeleteRefFormComponent } from './Components/delete-ref-form/delete-ref-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/references', pathMatch: 'full' },
  { path: 'employees', component: EmployeeDetailsComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: 'update/:id', component: EmployeeUpdateFormComponent },
  //{ path: 'remove', component: EmployeeDeleteFormComponent },
  { path: 'references', component: ReferenceDetailsComponent},
  { path: 'addRef', component: AddReferenceFormComponent},
  { path: 'updateRef', component: UpdateRefFormComponent},
 // { path: 'removeRef', component: DeleteRefFormComponent}
  { path: 'updateRef/:id', component: UpdateRefFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
