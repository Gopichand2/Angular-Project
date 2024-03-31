import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-List',
    templateUrl: './recipe-list.component.html'
})


export class RecipesListComponent implements OnInit{

  @Output()  RecipeWasSelected = new EventEmitter<Recipe>(); 

   @Output() recipes : Recipe[] =[new Recipe ('A test Recipe', 'A Good recipe', 'https://static01.nyt.com/images/2024/02/15/multimedia/15SOUPrex-vkjb/15LASAGNA-SOUPrex-vkjb-threeByTwoMediumAt2X.jpg?w=1280&q=75'),
   new Recipe ('A test Recipe', 'A Good recipe', 'https://static01.nyt.com/images/2024/02/15/multimedia/15SOUPrex-vkjb/15LASAGNA-SOUPrex-vkjb-threeByTwoMediumAt2X.jpg?w=1280&q=75')];

   constructor(){

    }


    ngOnInit(): void {
        
    }

    onRecipeSelected( recipe : Recipe){
        this.RecipeWasSelected.emit(recipe);
    }

}