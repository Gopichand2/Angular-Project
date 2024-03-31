import { Time } from "@angular/common";

export class list{
    public title : string;
    public Description: any;
    public time: string;


    constructor(title: string, Description: string, time : string){
        this.title = title;
        this.Description = Description;
        this.time = time;
    }

}

// export class Recipe{
//     public name:string;
//     public description : string;
//     public imagePath : string;


//     constructor(name : string, desc: string, imagePath: string){
//         this.name = name;
//         this.description = desc;
//         this.imagePath = imagePath;
//     }
// }