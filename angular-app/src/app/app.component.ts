import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  message: string = '';

  @HostListener('document:sendMessageEvent', ['$event', '$event.detail.message'])
  updateNodes(event: any, message: string) {
    console.log("app-angular receives: " + message);
  }

  onStart() {
    var event = new CustomEvent(
      'sendMessageEvent',
      { detail: { 'message': this.message }}
    );

    document.dispatchEvent(event);
  }
}
