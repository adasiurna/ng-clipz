import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  isDragover = false
  isUploadComplete = false
  file: File | null = null

  title = new FormControl('',  [
      Validators.required,
      Validators.minLength(3)
    ])
  uploadForm = new FormGroup({
    title: this.title
  })

  storeFile(event: Event): void {
    event.preventDefault();
    this.isDragover = false
    console.log('Default DROP behavior prevented!');

    // Nullish coalescing operator (??) returns its right-hand side operand when its left-hand side operand is null or undefined,
    // and otherwise returns its left-hand side operand
    this.file = (event as DragEvent).dataTransfer?.files.item(0) ?? null
    if (!this.file || this.file.type !== 'video/mp4') {
      return
    }
    this.title.setValue(
      this.file.name.replace(/\.[^/.]+$/, '')
    )
    this.isUploadComplete = true
    console.log('file: ', this.file);
  }

  handleDragover(event: Event): void {
    event.preventDefault();
    this.isDragover = true
    console.log('Default DRAGOVER behavior prevented!');
  }

  uploadFile() {
    console.log('File uploaded');
  }

}
