import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input() rowData:any;
  @Input() columnDefs:any;
  @Input() defaultColDef:any;
  
}
