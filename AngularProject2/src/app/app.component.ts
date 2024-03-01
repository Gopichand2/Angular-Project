import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularProject2';

 message: any;

  ServerElements = [{type : 'server', name: 'Test server', content : 'Just a Test'}];

  constructor(){}
  
  ngOnInit(): void {
    
  }

  
  onServerAdded(serverData : {serverName: string, serverContent: string}){

    this.ServerElements.push({
      type : 'server',
       name : serverData.serverName,
       content : serverData.serverContent
    });
  }

  onBluePrintAdded(BluePrintData : {serverName: string, serverContent: string}){
   
    this.ServerElements.push({
      type : 'blueprint',
       name : BluePrintData.serverName,
       content : BluePrintData.serverContent
    });
  }

  onReset(){
    while(this.ServerElements != null){
      this.ServerElements.pop();
    }
    this.message = "Servers Destroyed";
  }
}
