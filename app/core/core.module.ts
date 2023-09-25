import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { DataManagementModule } from '../data-management/data-management.module';

const routes:Routes=[]


@NgModule({
  declarations: [
    MenuComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    DataManagementModule
  ],
  exports:[CoreModule]
})
export class CoreModule { }
