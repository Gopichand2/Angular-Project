import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

 
   
  OddNumbers  = [];
 evenNumber = [];

  title = 'Game-Control';

  OnIntervalFired(num : number){
    if(num %2 == 0){
      this.evenNumber.push(num);
    }else{
      this.OddNumbers.push(num);
    }
  }
}
