import { Component, OnInit } from '@angular/core';
import { webServiceServices } from '../webservice.service';
import { webService } from '../Models/web-service.model';

export interface PeriodicElement {
  id: number;
  row_name: number;
}

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})

export class ServicesListComponent implements OnInit {

  webServiceEntity!: webService[];


  constructor(private WSService:webServiceServices) { }

  ngOnInit(): void {
    this.WSService.getAllServices().subscribe(data =>{
      console.log(data);
      this.webServiceEntity = data;
  });
  }

  displayedColumns: string[] = ['id', 'service_name','Action'];

executeService(id:any)
{
  console.log(id);
  this.WSService.callService(id).subscribe();
}

deleteService(id:number)
{
  if(confirm("Are You Sure To Delete This Service ?"))
  {
    this.WSService.deleteService(id).subscribe(res => window.location.reload());
  }

}
}
