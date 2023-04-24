import {Component, Input, OnInit} from '@angular/core';
import {Kitten} from "../models/kitten.model";


@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit{
  newUserKitten: Kitten[] = [];
  kitten!: Kitten;

  cat1: Kitten = new Kitten('Méli', 'Angora', '10/02/2022', './assets/images/chat1.jpg');
  cat2: Kitten = new Kitten('Bob', 'Gouttière', '01/08/2021', './assets/images/chat2.jpg');
  cat3: Kitten = new Kitten('Félix', 'Siamois', '14/06/2023', './assets/images/chat3.jpg');
  catList: Kitten[] =[this.cat1, this.cat2, this.cat3 ];

  ngOnInit(){
  }

  adoptKitten(kitten: Kitten): void{
    this.catList = this.catList.filter((kittenCatList) => kittenCatList.name !== kitten.name);
    this.newUserKitten.push(new Kitten(
      kitten.name,
      kitten.catBreed,
      kitten.birthday,
      kitten.image));
  }
}
