import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  isDragover = false

  storeFile(event: Event): void {
    event.preventDefault();
    this.isDragover = false
    console.log('Default DROP behavior prevented!', event);
  }

  handleDragover(event: Event): void {
    event.preventDefault();
    this.isDragover = true
    console.log('Default DRAGOVER behavior prevented!');
  }

}
