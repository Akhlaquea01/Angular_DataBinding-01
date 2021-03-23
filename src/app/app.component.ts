import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataBinding';
  fontColor = 'blue';
  canClick=false
  sayMessage() {
    alert(this.title);
}
}
