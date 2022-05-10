import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { database } from "./Models/database.model";
import { databaseRowsInfo } from "./Models/databaseRowsInfo.model";
import { DatabaseTableInfo } from "./Models/databaseTablesInfo.model";
import { webService } from "./Models/web-service.model";

@Injectable({providedIn:"root"})
export class webServiceServices{

  private addWebServiceAPI = "http://localhost:8080/ws/addws";
  private getDatabasesAPI = "http://localhost:8080/database/";
  private getDatabaseInfoAPI = "http://localhost:8080/database/info/" ;
  private getAllServicesAPI= "http://localhost:8080/ws/";
  private deteleServiceAPI ="http://localhost:8080/ws/delete/";
  private addDBConnectionAPI= "http://localhost:8080/database/add" ;
  private deleteDBConnectionAPI= "http://localhost:8080/database/delete/";

  constructor(private http:HttpClient){}

  addWebService(ws:webService):Observable<webService>
  {
    return this.http.post<webService>(this.addWebServiceAPI,ws);
  }

  getAllDatabases()
  {
    return this.http.get<database[]>(this.getDatabasesAPI);
  }

  getDatabaseTablesInfo(dbName:string)
  {
    return this.http.get<DatabaseTableInfo[]>(this.getDatabaseInfoAPI+dbName);
  }

  getDatabaseRowsInfo(dbName:string,tableName:string)
  {
    return this.http.get<databaseRowsInfo[]>(this.getDatabaseInfoAPI+tableName+"/"+dbName);
  }
  getAllServices()
  {
    return this.http.get<webService[]>(this.getAllServicesAPI);
  }
  callService(id:number)
  {
    return this.http.get<webService[]>(this.getAllServicesAPI+id);
  }
  deleteService(id:number)
  {
    return this.http.delete(this.deteleServiceAPI+id);
  }
  addDBConnection(db:database):Observable<database>
  {
    return this.http.post<database>(this.addDBConnectionAPI,db);
  }
  deleteDBConnection(id:number)
  {
    return this.http.delete(this.deleteDBConnectionAPI+id);
  }
  updateDBConnection(db:database,id:number)
  {
    return this.http.put(this.getDatabasesAPI+id,db);
  }
}
