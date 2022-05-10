import { Component, OnInit } from '@angular/core';
import { EditDatabaseComponent } from '../edit-database/edit-database.component';
import { database } from '../Models/database.model';
import { webServiceServices } from '../webservice.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-databases-list',
  templateUrl: './databases-list.component.html',
  styleUrls: ['./databases-list.component.css']
})
export class DatabasesListComponent implements OnInit {

  database!: database[] ;
  constructor(private WSService:webServiceServices,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.WSService.getAllDatabases().subscribe(data =>{
      console.log(data);
      this.database = data;
  });
  }

  displayedColumns: string[] = ['id', 'db_name','db_hostname','Action'];

  deleteDBConnection(id:number)
{
  console.log(id);
  if(confirm("Are You Sure To Delete This Database Connection ?"))
  {
    this.WSService.deleteDBConnection(id).subscribe(res => window.location.reload());
  }
}
openDialog(element:any) {
  this.dialog.open(EditDatabaseComponent, {
    width: '20cm' ,
    data: element
  });
}
}


