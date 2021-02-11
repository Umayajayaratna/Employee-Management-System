import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { MenuBarComponent } from './Components/menu-bar/menu-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeFormComponent } from './Components/employee-form/employee-form.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeMenuComponent } from './Components/employee-menu/employee-menu.component';
import { EmployeeUpdateFormComponent } from './Components/employee-update-form/employee-update-form.component';
import { EmployeeDeleteFormComponent } from './Components/employee-delete-form/employee-delete-form.component';
import { ReferenceDetailsComponent } from './Components/reference-details/reference-details.component';
import { ReferenceMenuComponent } from './Components/reference-menu/reference-menu.component';
import { AddReferenceFormComponent } from './Components/add-reference-form/add-reference-form.component';
import { UpdateRefFormComponent } from './Components/update-ref-form/update-ref-form.component';
import { DeleteRefFormComponent } from './Components/delete-ref-form/delete-ref-form.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    MenuBarComponent,
    EmployeeFormComponent,
    EmployeeComponent,
    EmployeeMenuComponent,
    EmployeeUpdateFormComponent,
    EmployeeDeleteFormComponent,
    ReferenceDetailsComponent,
    ReferenceMenuComponent,
    AddReferenceFormComponent,
    UpdateRefFormComponent,
    DeleteRefFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
