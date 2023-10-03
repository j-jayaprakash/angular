import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { DataManagementModule } from '../data-management/data-management.module';
import { AgGridModule } from 'ag-grid-angular';


const routes:Routes=[
  {
    path:'#',
    component:MenuComponent
  },
  {
    path:'dataManagement',
    loadChildren:()=>import('../data-management/data-management.module').then(m=>DataManagementModule)

  }
]


@NgModule({
  declarations: [
    GridComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AgGridModule
  ],
  exports:[MenuComponent]
})
export class CoreModule { }
