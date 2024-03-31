import { Component, EventEmitter, Input, OnInit, Output, input } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})


export class RecipesItemComponent implements OnInit{
    @Input() recipe : Recipe;
    @Output() recipeSelected = new EventEmitter<void>();
    constructor(){}

    ngOnInit(): void {
        
    }

    onSelected(){
        this.recipeSelected.emit();
    }
}