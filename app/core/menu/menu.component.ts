import { AfterContentChecked, Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterContentChecked {


  public dataBaseDetails:any;
  public dm:any;

  public userData:any;

  public rowData:any=[];

  constructor(private dbs:DataServiceService){
   
    
  }
  ngAfterContentChecked(): void {
    console.log(this.dbs.userData);

    this.rowData=this.dbs.userData;
    this.rowData=[...this.rowData];

  }
  ngOnInit(): void {
    this.dataBaseDetails=this.dbs.dbDetails;
    this.dm=Object.keys(this.dataBaseDetails['dataManagement'][0])
  }



  
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [

    { field:"dbType"} ,
    { field:"dbName"} ,
    { field:"dbUrl"} ,
    { field:"dbPort"} ,
    { field:"userName"} ,
    { field:"password"} 

  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };




  

}
