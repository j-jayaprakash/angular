import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    MenuComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule
  ]
})
export class CoreModule { }
