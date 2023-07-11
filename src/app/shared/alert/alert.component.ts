import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() color = 'blue'

  get bgColor() {  // would be nice to know more about this getter
    return `bg-${this.color}-400`
  }

}
