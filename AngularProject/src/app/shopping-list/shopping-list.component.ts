import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { Ingrediant } from './ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

  ingrediants : Ingrediant[] = [ new Ingrediant('apple', 5),
                                  new Ingrediant('Tomato', 10)];

  constructor(){}
  
  ngOnInit(): void {
    
  }
  

  onIngrediantAdded(ingrediant : Ingrediant){
    this.ingrediants.push(ingrediant);
  }

}
