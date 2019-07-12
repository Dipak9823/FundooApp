import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent} from 'ngx-image-cropper';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadimageService} from '../../Services/uploadimage.service';
import { RootService} from '../../Services/root.service';
import {  HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-profiledialog',
  templateUrl: './profiledialog.component.html',
  styleUrls: ['./profiledialog.component.css']
})
export class ProfiledialogComponent implements OnInit {
  uploadform:FormGroup;
  constructor(private formbuilder:FormBuilder,
              private service:RootService,
              private http:HttpClient) { }
  imageChangedEvent: any = '';
    croppedImage: any = '';
    selectedFile:File=null;
  ngOnInit() {

    this.uploadform=this.formbuilder.group({
      profile:['']
  })
  console.log("Image ", this.uploadform.value);
  }
 
  onFileSelected(event){
    console.log(event);
    this.selectedFile=<File>event.target.files[0]
    

  }
  
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  onSubmit():void {
      var token=localStorage.getItem('token');
      const fd=new FormData();
      fd.append('profile',this.selectedFile,this.selectedFile.name)
      this.http.post('http://localhost:8000/uploadimg',fd,{ headers:{'token':token}}).subscribe((response)=>{
        console.log("response",response);
        localStorage.setItem('profile',response[0].result);
      },
      (err)=>{
        console.log("Error",err);
      }
    
    )


  }
}
