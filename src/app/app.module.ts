import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeListComponent } from './employee/employe-list/employe-list.component';
import { EmployeRegisterComponent } from './employee/employe-register/employe-register.component';
import { EmployeUpdateComponent } from './employee/employe-update/employe-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const routeArray=[
  {
    path:"employeList",
    component:EmployeListComponent
  },
  { 
    path:"employeRegister",
    component:EmployeRegisterComponent
  },
  {
    path:"employeUpdate/:id",
    component:EmployeUpdateComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeListComponent,
    EmployeRegisterComponent,
    EmployeUpdateComponent,
    RootNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routeArray),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
