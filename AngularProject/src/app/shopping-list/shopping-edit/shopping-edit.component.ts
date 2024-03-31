import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { Ingrediant } from '../ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit{

  @ViewChild('nameInput') nameInputRef :ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();

  ngOnInit(): void {
    
  }

  onAddItem(){
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;

      const newIngrediant = new Ingrediant(ingName, ingAmount);
      this.ingrediantAdded.emit(newIngrediant);
  }

}
