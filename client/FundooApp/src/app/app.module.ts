import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RootService} from './root.service';
import { ForgopasswordComponent } from './forgopassword/forgopassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgopasswordComponent,
    ResetpasswordComponent,
    //AppRoutingModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [RootService],
  bootstrap: [AppComponent]
})
export class AppModule { }
