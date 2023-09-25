import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBServiceService {

  constructor() { }


  public dbDetails:any={

    dataManagement:[
      {
        dataSource:{
          dbName:"MySql",
          url:"http://www.localhost:8080"
        },
        dataService:{
          dbName:"MySql",
          url:"http://www.localhost:8080"
        }
      }

    ]
  }
}
