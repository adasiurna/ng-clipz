import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    showModal = true
//   title = 'clips';

    constructor(public modal: ModalService) {
        
    }

    ngOnInit() {
        setInterval(() => {
            this.showModal = !this.showModal
            console.log('modals in app component:', this.modal.modals);
        }, 1000)
    }
}
