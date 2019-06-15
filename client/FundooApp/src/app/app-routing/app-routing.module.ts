import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,RouterOutlet} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent} from '../register/register.component';
import { ResetpasswordComponent} from '../resetpassword/resetpassword.component';
import { ForgopasswordComponent} from '../forgopassword/forgopassword.component';
import { BrowserModule } from '@angular/platform-browser';
//import { RootService} from '../root.service';
const appRoutes: Routes=[
  {path: 'login', component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'forgotpassword', component: ForgopasswordComponent},
  {path: 'resetpassword', component: ResetpasswordComponent},
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
