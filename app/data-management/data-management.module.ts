import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceFormComponent } from './data-service-form/data-service-form.component';
import { DataServiceListComponent } from './data-service-list/data-service-list.component';
import { DataSourceFormComponent } from './data-source-form/data-source-form.component';
import { DataSourceListComponent } from './data-source-list/data-source-list.component';



@NgModule({
  declarations: [
    DataServiceFormComponent,
    DataServiceListComponent,
    DataSourceFormComponent,
    DataSourceListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DataManagementModule { }
