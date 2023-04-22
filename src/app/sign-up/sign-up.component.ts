import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user: User = new User('', '', '', '');

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.user);
  }
}
