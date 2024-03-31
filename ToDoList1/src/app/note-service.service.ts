import { Injectable } from '@angular/core';
import { list } from './list.model';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  // Title : string;
  // Description: string;
  // Time : Time;

  List : any[];

  ListStore : [];


  

  getNote(){
    return this.ListStore;
  }

  addNote(title : string, description: string, time : Time){
    // this.Title = title;
    // this.Time = time;
    // this.Description = description;

    this.List.push(title);
    this.List.push(description);
    this.List.push(time);
  }

  constructor() { }
}
