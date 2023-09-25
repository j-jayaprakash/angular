import { Component, OnInit } from '@angular/core';
import { DBServiceService } from 'src/app/dbservice.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public dataBaseDetails:any;
  public dm:any;


  constructor(private dbs:DBServiceService){
  }
  ngOnInit(): void {
    this.dataBaseDetails=this.dbs.dbDetails;
    this.dm=Object.keys(this.dataBaseDetails['dataManagement'][0])
  }

  



}
