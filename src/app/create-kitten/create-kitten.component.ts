import {Component, Input, Output} from '@angular/core';
import {Kitten} from "../models/kitten.model";

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
  @Input()
  catList!: Kitten[];

  kitten: Kitten = new Kitten("", "", "", "");

  onSubmit() {
    this.catList.push(new Kitten(
      this.kitten.name,
      this.kitten.catBreed,
      this.kitten.birthday,
      this.kitten.image));
  }

}
