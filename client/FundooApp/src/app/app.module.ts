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
import { RootService} from './Services/root.service';
import { UploadimageService} from './Services/uploadimage.service';
import { LabelserviceService} from './Services/labelservice.service';
import { ForgopasswordComponent } from './Component/forgopassword/forgopassword.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { KeepnotesComponent } from './Component/keepnotes/keepnotes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatLabel,MatInputModule, MatCheckboxModule, MatSidenavModule,MatIconModule,MatListModule, MatToolbarModule} from '@angular/material';
import {  MatFormFieldModule, MatDialogModule, MatChipsModule} from '@angular/material';
import { MatMenuModule,MatCardModule,MatExpansionModule} from '@angular/material'
import { FlexLayoutModule} from '@angular/flex-layout';
import { NotesComponent } from './Component/notes/notes.component';
import { AchievenotesComponent } from './Component/achievenotes/achievenotes.component';
import { ArchiveComponent } from './Component/archive/archive.component';
import { ProfiledialogComponent } from './Component/profiledialog/profiledialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { TrashComponent } from './Component/trash/trash.component';
import { UpdatenoteComponent } from './Component/updatenote/updatenote.component';
import { LabelComponent } from './Component/label/label.component';
import { EditlabelComponent } from './Component/editlabel/editlabel.component';
import { SearchPipe } from './search.pipe';
import { IconsComponent } from './Component/icons/icons.component'
@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgopasswordComponent,
    ResetpasswordComponent,
    KeepnotesComponent,
    NotesComponent,
    AchievenotesComponent,
    ArchiveComponent,
    ProfiledialogComponent,
    TrashComponent,
    UpdatenoteComponent,
    LabelComponent,
    EditlabelComponent,
    SearchPipe,
    IconsComponent,
       
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
    MatExpansionModule,
    FlexLayoutModule,
    MatDialogModule,
    MatChipsModule,
    ImageCropperModule
  
  ],
  entryComponents:[ ProfiledialogComponent, UpdatenoteComponent, LabelComponent] ,
  providers: [RootService,UploadimageService,LabelserviceService],
  bootstrap: [AppComponent],

})
export class AppModule { }
 