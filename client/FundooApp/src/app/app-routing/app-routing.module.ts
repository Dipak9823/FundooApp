import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,RouterOutlet} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent} from '../register/register.component';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes=[
  {path: 'login', component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: '',  redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
  ],
  /*declarations:[
    LoginComponent,
    RegisterComponent
  ]*/
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
