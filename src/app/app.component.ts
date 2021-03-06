import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStarted(currentValue: number) {
    (currentValue % 2 === 0) ? this.evenNumbers.push(currentValue) : this.oddNumbers.push(currentValue);
  }


}
