import {Component} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: "Le gras c'est la vie",
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  element: boolean = true;
  showData() {
    this.element = true;
  }
  hideData() {
    this.element = false;
  }
}
