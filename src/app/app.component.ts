import {Component, Input, Output} from '@angular/core';
import {CreateOnomatopiaComponent} from "./create-onomatopia/create-onomatopia.component";
import {UserKittenComponent} from "./user-kitten/user-kitten.component";
import {ListKittenComponent} from "./list-kitten/list-kitten.component";
import {Kitten} from "./models/kitten.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue sur le site de Johann';
  onomatopoeiaList: string[] = ['Hé', 'Ho', 'Ah', 'Yeah', 'Oh'];

  onReceiveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopoeiaList.push(newOnomatopia);
  }
}
