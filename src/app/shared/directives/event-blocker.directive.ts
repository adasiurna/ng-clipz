import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[app-event-blocker]'
})
export class EventBlockerDirective {

  // directive does not work, did not manage to find out why :(
  // will use a method in upload template that will be defined in upload component
  @HostListener('dragover', ['$event'])
  @HostListener('drop', ['$event'])
  public handleEvent(event: Event) {
    console.log('preventing default behavior with directive');
    event.preventDefault()
  }

}
