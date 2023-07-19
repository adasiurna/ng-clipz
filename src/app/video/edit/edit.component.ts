import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import IClip from 'src/app/models/clip.model';
import { ClipService } from 'src/app/services/clip.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy, OnChanges {
  @Input() activeClip: IClip | null = null
  inSubmission = false
  showAlert = false
  alertColor = 'blue'
  alertMsg = 'Please wait, updating clip.'
  @Output() update = new EventEmitter()


  clipID = new FormControl('', {
    nonNullable: true
  })

  title = new FormControl('',  [
      Validators.required,
      Validators.minLength(3)
    ])

  editForm = new FormGroup({
    title: this.title, 
    id: this.clipID
  })

  constructor(
    private modal: ModalService,
    private clipService: ClipService
  ) {}

  ngOnInit(): void {
    this.modal.register('editClip')
  }

  ngOnDestroy() {
    this.modal.unregister('editClip')
  }

  ngOnChanges(): void {
    if (!this.activeClip) {
      return
    }

    this.inSubmission = false
    this.showAlert = false
    this.clipID.setValue(this.activeClip.docID as string)
    this.title.setValue(this.activeClip.title)
  }
  
  async submit() {
    if (!this.activeClip) {
      return
    }

    this.inSubmission = true
    this.showAlert = true
    this.alertColor = 'blue'
    this.alertMsg = 'Please wait, updating clip.'

    try {
      await this.clipService.updateClip(this.clipID.value, this.title.value as string)
    }
    catch (e) {
      this.inSubmission = false
      this.alertColor = 'red'
      this.alertMsg = 'Smth wrong, try again later'
      return
    }

    this.activeClip.title = this.title.value as string
    this.update.emit(this.activeClip)
    this.inSubmission = false
    this.alertColor = 'green'
    this.alertMsg = 'Successssss! It is updated ;)'
  }

}
