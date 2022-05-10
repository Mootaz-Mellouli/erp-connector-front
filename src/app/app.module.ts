import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { AddServiceComponent } from './add-service/add-service.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule,Routes } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesListComponent } from './services-list/services-list.component';
import {MatTableModule} from '@angular/material/table';
import { DbConnectionComponent } from './db-connection/db-connection.component';
import { DatabasesListComponent } from './databases-list/databases-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDatabaseComponent } from './edit-database/edit-database.component';

const routes : Routes =[
  { path:"",component:HomeComponent},
  { path:"addService",component:AddServiceComponent},
  { path:"servicesList",component:ServicesListComponent},
  { path:"dbConnection",component:DbConnectionComponent},
  { path:"dbList",component:DatabasesListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AddServiceComponent,
    ToolbarComponent,
    HomeComponent,
    ServicesListComponent,
    DbConnectionComponent,
    DatabasesListComponent,
    EditDatabaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
