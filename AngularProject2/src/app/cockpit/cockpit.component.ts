import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, input } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit{

  @Output() serverCreated= new EventEmitter<{serverName : string, serverContent : string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  
  newserverName = '';
  newserverContent = '';
  input='';

  @ViewChild('ServerInputChild')  serverInC : ElementRef;
serverInc1;
  constructor(){

  }
  ngOnInit(): void {
    
  }

  addServer(){
    this.serverCreated.emit({
      serverName : this.newserverName,
      serverContent: this.newserverContent
    });
    this.serverInc1 = this.serverInC.nativeElement.value;

  }

  addBluePrint(){
    this.bluePrintCreated.emit({
      serverName : this.newserverName,
      serverContent: this.newserverContent
    });
    this.serverInc1 = this.serverInC.nativeElement.value;

  }


  addLocalRefference(inputValue){
    console.log(inputValue.valueOf);
    this.input = inputValue.value;
    this.serverInc1 = this.serverInC.nativeElement.value;
  }


  
}
