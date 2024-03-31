import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent implements OnInit{

  ngOnInit(): void {
    
  }

  constructor (private router : Router){}
  onNavigateItem(){
    this.router.navigate(['/other']);
  }

}
