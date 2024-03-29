import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../Component/login/login.component';
import { RegisterComponent} from '../Component/register/register.component';
import { ResetpasswordComponent} from '../Component/resetpassword/resetpassword.component';
import { ForgopasswordComponent} from '../Component/forgopassword/forgopassword.component';
import { KeepnotesComponent } from '../Component/keepnotes/keepnotes.component'
import { NotesComponent} from '../Component/notes/notes.component';
import { AchievenotesComponent} from '../Component/achievenotes/achievenotes.component';
import { ArchiveComponent} from '../Component/archive/archive.component'
import { BrowserModule } from '@angular/platform-browser';
import { RootService} from '../Services/root.service';
import { TrashComponent } from '../Component/trash/trash.component';
import { EditlabelComponent } from '../Component/editlabel/editlabel.component';
import { IconsComponent } from '../Component/icons/icons.component';
import { ReminderComponent } from '../Component/reminder/reminder.component';

const appRoutes: Routes=[
  {path: 'login', component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'forgotpassword', component: ForgopasswordComponent},
  {path: 'resetpassword/:token', component: ResetpasswordComponent},
  {path:'notes',component:NotesComponent},
  {path: 'keepnotes', component: KeepnotesComponent,children:[
    {path:'notes',component:NotesComponent},
    {path: 'achievenotes', component:AchievenotesComponent },
    {path: 'reminder', component: ReminderComponent},
    {path: 'archive', component:ArchiveComponent},
    {path: 'trash', component: TrashComponent},
    {path: 'editlabel', component:EditlabelComponent },
    {path: 'icon' , component: IconsComponent}
  ]},
  {path: '',  redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [
   
    RouterModule.forRoot(appRoutes),
       
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
