import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,AbstractControl} from '@angular/forms';
import { database } from '../Models/database.model';
import { databaseRowsInfo } from '../Models/databaseRowsInfo.model';
import { DatabaseTableInfo } from '../Models/databaseTablesInfo.model';
import { webService } from '../Models/web-service.model';
import { webServiceServices } from '../webservice.service';

interface operatorInterface {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  webServiceForm!: FormGroup;
  webServiceEntity: webService = new webService();
  post="";
  db!: database[];
  dbTableInfo!: DatabaseTableInfo[];
  dbRowInfo!: databaseRowsInfo[];
  dbName="";
  tableName="";
  columnName=[];
  inputValue="";
  inputColumn="";
  service_name="";
  operator!: "";
  operators: operatorInterface[] = [
    {value: '=' , viewValue: 'Equal'},
    {value: '!=', viewValue: 'Not Equal'},
    {value: '>' , viewValue: 'Greater Than'},
    {value: '>=', viewValue: 'Greater Than or Equal'},
    {value: '<' , viewValue: 'Less Than'},
    {value: '<=', viewValue: 'Less Than or Equal'}
  ];

  constructor(private _formBuilder: FormBuilder,private WSService:webServiceServices) {}

      /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null { return this.webServiceForm.get('formArray'); }

  ngOnInit(): void {
    /************************/
    this.webServiceForm = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          database: ['', Validators.required],
          service_name: ['', Validators.required]
        }),
        this._formBuilder.group({
          table: ['', Validators.required]
        }),
        this._formBuilder.group({
          columns: ['', Validators.required]
        }),
        this._formBuilder.group({
          inputvalue: ['', Validators.required],
          inputColumns: ['', Validators.required],
          operator: ['', Validators.required]
        }),
      ])
    });
    /************** GET Databases names from webService service *************/
    this.WSService.getAllDatabases().subscribe(data =>{this.db=data; console.log(data)});
  }
  onSubmit()
  {
    this.webServiceEntity.service_name=this.service_name;
    this.webServiceEntity.database_name=this.dbName;
    this.webServiceEntity.table_name=this.tableName;
    this.webServiceEntity.column_name=this.columnName;
    this.webServiceEntity.inputColumn=this.inputColumn;
    this.webServiceEntity.inputValue=this.inputValue;
    this.webServiceEntity.operator=this.operator;
    console.log(this.webServiceForm);
    this.saveWS();
    console.log(this.webServiceEntity.database_name);
  }
  saveWS()
  {
    this.WSService.addWebService(this.webServiceEntity).subscribe(webServiceEntity=>{this.post="succes"});
  }
  getDatabaseTablesInfo()
  {
    this.WSService.getDatabaseTablesInfo(this.dbName).subscribe(data =>{this.dbTableInfo=data; console.log(data)});
  }
  getDatabaseRowsInfo()
  {
    this.WSService.getDatabaseRowsInfo(this.tableName,this.dbName).subscribe(data =>{this.dbRowInfo=data; console.log(data)});
  }

}
