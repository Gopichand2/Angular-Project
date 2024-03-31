import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';



const routes : Routes =[
  {  path: 'AddItem' , component : AddItemComponent },
  {  path: 'other', component : EditItemComponent },
  
]




@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AddItemComponent,
    EditItemComponent,
    ListComponent
  
  ],
  imports: [

   RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports : [RouterModule],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
