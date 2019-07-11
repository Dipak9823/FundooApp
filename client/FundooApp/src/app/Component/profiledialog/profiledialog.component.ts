import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent} from 'ngx-image-cropper';
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-profiledialog',
  templateUrl: './profiledialog.component.html',
  styleUrls: ['./profiledialog.component.css']
})
export class ProfiledialogComponent implements OnInit {
  uploadform:FormGroup;
  constructor(private formbuilder:FormBuilder) { }
  imageChangedEvent: any = '';
    croppedImage: any = '';

  ngOnInit() {
  }
 
  onFileSelected(event){
    console.log(event);
    this.imageChangedEvent=event;


  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
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
  onSubmit(){
    this.uploadform=this.formbuilder.group({
        profile:['']
    })
  }
}
