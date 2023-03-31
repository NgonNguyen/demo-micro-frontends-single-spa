import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-b';
  message = '';

  @HostListener('document:sendMessageEvent', ['$event', '$event.detail.message'])
  updateNodes(event: any, message: string) {
    console.log("app-angular-b receives: " + message);
    this.message = message;
  }
}
