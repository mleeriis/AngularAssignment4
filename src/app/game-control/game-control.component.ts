import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameRunning;
  @Output() gameStarted = new EventEmitter<number>();
  currentValue: number;

  constructor() {
  }

  ngOnInit() {
    this.currentValue = 0;
  }

  gameStart() {
    this.gameRunning = setInterval(() => {
      this.gameStarted.emit(this.currentValue);
      // @ts-ignore
      this.currentValue++;
    }, 1000);
  }

  gameStop() {
    clearInterval(this.gameRunning);
  }
}
