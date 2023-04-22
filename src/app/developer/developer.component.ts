import {Component, OnInit} from '@angular/core';
import {Developer} from "../models/developer.model";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  developer: Developer = new Developer('John', 'Doe', 35, 'male', 'Developper in training',
    [{
      name: 'Skill1',
      logo: 'logoSkill1',
      site: 'www.skill1.com'
    }, {
      name: 'Skill2',
      logo: 'logoSkill2',
      site: 'www.skill2.com'
    }
    ]);

  ngOnInit() {

  }

}
