import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-odd-eve',
  templateUrl: './odd-eve.component.html',
  styleUrl: './odd-eve.component.css'
})
export class OddEveComponent {
  @Input() getNumber: number;

}
