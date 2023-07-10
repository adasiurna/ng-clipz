import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
//   providers: [ModalService]
})
export class ModalComponent implements OnInit {
    @Input() modalID= '' // would be nice to understand fully what this does...

    constructor(public modal: ModalService, public el: ElementRef) {
        console.log('el: ', el);
    }

    ngOnInit(): void {  // this hook works after the component has been initialized
        document.body.appendChild(this.el.nativeElement)
    }

    closeModal() {
        this.modal.toggleModal(this.modalID)
    }

}
 