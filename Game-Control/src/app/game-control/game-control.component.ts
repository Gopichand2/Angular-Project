import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit{

  @Output() IntervalFired = new EventEmitter<number>();

  interval;

  Lastnumber = 0;

  constructor(){}

  ngOnInit(): void {
    
  }

  OnStartGame(){
    this.interval = setInterval(()=>{
      this.IntervalFired.emit(this.Lastnumber + 1);
      this.Lastnumber++;
      console.log(this.Lastnumber);
    },1000);
  }

  onPause(){
    clearInterval(this.interval);
  }

}
