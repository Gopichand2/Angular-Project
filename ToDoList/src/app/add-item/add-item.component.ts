import { Component } from '@angular/core';
import { list } from '../list.model';
import { Output } from '@angular/core';
import { timeStamp } from 'console';
import { timestamp } from 'rxjs';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})

export class AddItemComponent {
  // @Output() recipes : Recipe[] =[new Recipe ('A test Recipe', 'A Good recipe', 'https://static01.nyt.com/images/2024/02/15/multimedia/15SOUPrex-vkjb/15LASAGNA-SOUPrex-vkjb-threeByTwoMediumAt2X.jpg?w=1280&q=75'),
  // new Recipe ('A test Recipe', 'A Good recipe', 'https://static01.nyt.com/images/2024/02/15/multimedia/15SOUPrex-vkjb/15LASAGNA-SOUPrex-vkjb-threeByTwoMediumAt2X.jpg?w=1280&q=75')];

  time = timestamp.toString;
   list1 : list[] = [  new list ('1st Diary day Time','Diary is my favourite', "24:12:23"),
                                 new list ('2nd day Diary Time','I want to write diary', "25:12:2024"),
                                 new list ('3nd Diary day Time','Diary is my Replica in book form', "26:12:23"),
                                 new list ('3nd Diary day Time','Diary is my Replica in book form', "26:12:23"),
                                 new list ('3nd Diary day Time','Diary is my Replica in book form', "26:12:23"),
                                 new list ('3nd Diary day Time','Diary is my Replica in book form', "26:12:23"),
                                 new list ('3nd Diary day Time','Diary is my Replica in book form', "26:12:23"),
                                 new list ('3nd Diary day Time','Diary is my Replica in book form', "26:12:23")] ;

}
