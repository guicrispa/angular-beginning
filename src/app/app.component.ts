import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Guilherme';

  start() {
    setInterval(() => {
      this.counter = this.counter - 1;
    }, 1000);
  }
  counter: number = 20;
  rest: number = 10;

  getSeconds() {
    return Math.trunc(this.counter % 60);
  }

  pause() {
    clearInterval(this.counter);
  }

  stop() {
    clearInterval(this.counter);
    this.counter = 0;
  }

  // zerou(){
  //   if{

  //   }
  // }
}
