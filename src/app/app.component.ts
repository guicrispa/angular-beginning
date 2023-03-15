import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Guilherme Crispim';

  timer = setInterval(() => {
    // this.counter = this.counter + 1;
  }, 1000);

  start() {
    setInterval(() => {
      this.counter = this.counter + 1;
    }, 1000);
  }
  counter: number = 0;

  getSeconds() {
    return Math.trunc(this.counter % 60);
  }

  pause() {}

  stop() {
    clearInterval(this.counter);
  }
}
