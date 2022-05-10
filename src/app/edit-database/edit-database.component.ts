import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-database',
  templateUrl: './edit-database.component.html',
  styleUrls: ['./edit-database.component.css']
})
export class EditDatabaseComponent implements OnInit {
  @ViewChild('f') addDBForm!: NgForm ;

  constructor(
   @Inject(MAT_DIALOG_DATA) public editDB:any
  ) { }

  ngOnInit(): void {
    console.log(this.editDB);


      this.addDBForm.value.db_name=this.editDB.db_name;

  }

  onSubmit(){}

}
