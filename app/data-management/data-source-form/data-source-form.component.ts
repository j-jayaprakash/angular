import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-data-source-form',
  templateUrl: './data-source-form.component.html',
  styleUrls: ['./data-source-form.component.css']
})
export class DataSourceFormComponent {

  public data:any={};

  constructor(private fb:FormBuilder,private service:DataServiceService){

    this.data=fb.group({
      dbType:[,],
      dbName:[,],
      dbUrl:[,],
      dbPort:[,],
      userName:[,],
      password:[,]
    })

  }


  public saveUser(){
  
    this.service.userData.push(this.data.value);
  }




}
