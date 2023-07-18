import { Component, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
//   providers: [ModalService]
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() modalID= '' // would be nice to understand fully what this does...

    constructor(public modal: ModalService, public el: ElementRef) {}

    ngOnInit(): void {  // this hook works after the component has been initialized
        document.body.appendChild(this.el.nativeElement)
    }

    ngOnDestroy() {
      document.body.removeChild(this.el.nativeElement)
    }

    closeModal() {
        this.modal.toggleModal(this.modalID)
    }

}
 