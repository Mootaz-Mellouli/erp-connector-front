import { Component, OnInit } from '@angular/core';
import { webServiceServices } from '../webservice.service';
import { NgForm } from '@angular/forms';
import { database } from '../Models/database.model';


@Component({
  selector: 'app-db-connection',
  templateUrl: './db-connection.component.html',
  styleUrls: ['./db-connection.component.css']
})
export class DbConnectionComponent implements OnInit {

  database = new database ;
  constructor(private WSService:webServiceServices) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm)
  {
this.database.db_hostname=form.value.db_hostname;
this.database.db_type=form.value.db_type;
this.database.db_username=form.value.db_username;
this.database.db_password=form.value.db_password;
this.database.db_name=form.value.db_name;
console.log(form);
this.saveDB();
  }

  saveDB()
  {
    this.WSService.addDBConnection(this.database).subscribe();
  }

}
