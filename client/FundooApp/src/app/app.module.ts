import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RootService} from './root.service';
import { ForgopasswordComponent } from './Component/forgopassword/forgopassword.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { KeepnotesComponent } from './Component/keepnotes/keepnotes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatLabel,MatInputModule, MatCheckboxModule, MatSidenavModule,MatIconModule,MatListModule, MatToolbarModule} from '@angular/material';
import {  MatFormFieldModule} from '@angular/material';
import { MatMenuModule,MatCardModule} from '@angular/material'
import { FlexLayoutModule} from '@angular/flex-layout';
import { NotesComponent } from './Component/notes/notes.component';
@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgopasswordComponent,
    ResetpasswordComponent,
    KeepnotesComponent,
    NotesComponent,
   
    //AppRoutingModule
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    
    FlexLayoutModule
  
  ],

  providers: [RootService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 