import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceListComponent } from './data-service-list/data-service-list.component';
import { DataServiceFormComponent } from './data-service-form/data-service-form.component';
import { DataSourceFormComponent } from './data-source-form/data-source-form.component';
import { DataSourceListComponent } from './data-source-list/data-source-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule  } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes:Routes=[
  {
    path:'dataSource',
    component:DataSourceListComponent
  },
  {
    path:'dataService',
    component:DataServiceListComponent

  }
  
]


@NgModule({
  declarations: [
        DataServiceListComponent,
        DataServiceFormComponent,
        DataSourceFormComponent,
        DataSourceListComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ]
})
export class DataManagementModule { }
