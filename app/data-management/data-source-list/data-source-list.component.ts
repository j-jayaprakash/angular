import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSourceFormComponent } from '../data-source-form/data-source-form.component';


@Component({
  selector: 'app-data-source-list',
  templateUrl: './data-source-list.component.html',
  styleUrls: ['./data-source-list.component.css']
})
export class DataSourceListComponent {

  constructor(public dialog: MatDialog) {}


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DataSourceFormComponent, {
      width: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
